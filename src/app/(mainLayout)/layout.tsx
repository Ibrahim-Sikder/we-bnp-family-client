
import Loading from "@/components/Loading/Loading";
import FooterSection from "@/components/shared/Footer/FooterSection";
import Header from "@/components/shared/Header/Header";
import LandingPageProvider from "@/lib/Theme/LandingPageProvider";
import React, { ReactNode, Suspense } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <LandingPageProvider>
      <Suspense fallback={<div><Loading/></div>}>
        <Header />
        {children}
     <FooterSection/>
      </Suspense>
    </LandingPageProvider>
  );
};

export default layout;
