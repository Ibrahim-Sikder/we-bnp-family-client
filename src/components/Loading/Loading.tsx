
'use client'
import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../../../public/loading.json';

const Loading = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        style={{ width: '200px', height: '150px' }}
      />

    </div>
  );
};

export default Loading;
