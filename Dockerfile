# Use the base image for Node
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy lock files for dependency management
COPY package.json package-lock.json* pnpm-lock.yaml* ./

# Install dependencies with --legacy-peer-deps to ignore peer dependency conflicts
RUN \
  if [ -f package-lock.json ]; then npm ci --legacy-peer-deps; \
  elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install --frozen-lockfile; \
  else echo "No lockfile found for dependency installation." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Check if .env.example exists, then copy to .env
RUN test -f .env.example && cp .env.example .env || echo ".env.example not found, skipping .env copy."

# Use npm to build the project
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

# Set the production environment variables
ENV NODE_ENV=production
ENV NEXT_PUBLIC_BASE_API_URL=https://api.amrabnpporibar.org/api/v1


# Add non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files and set permissions
COPY --from=builder /app/public ./public

# Set up prerender cache permissions
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/next.config.mjs ./

USER nextjs

# Expose application port
EXPOSE 4000

# Start the Next.js server using the built standalone output
CMD ["node", "server.js"]