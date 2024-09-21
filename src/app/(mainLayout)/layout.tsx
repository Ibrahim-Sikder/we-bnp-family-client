

import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import LandingPageProvider from "@/lib/Theme/LandingPageProvider";
import React, { ReactNode, Suspense } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <LandingPageProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        {children}
        <Footer />
      </Suspense>
    </LandingPageProvider>
  );
};

export default layout;
