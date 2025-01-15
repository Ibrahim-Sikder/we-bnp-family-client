"use client";

import dynamic from "next/dynamic";

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => mod.Player), { ssr: false });

const Loader = () => {
  const loadingSrc = "/loading.json"; 

  return (
    <div className="fixed inset-0 h-screen flex items-center justify-center bg-white z-50">
      <Player
        autoplay
        loop
        src={loadingSrc}
        className="w-[150px] h-[150px] md:w-[250px] md:h-[150px]"
      />
    </div>
  );
};

export default Loader;
