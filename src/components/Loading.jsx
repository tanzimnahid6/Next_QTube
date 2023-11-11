// components/LoadingPage.js
import React from 'react';

const LoadingPage = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black">
      <div className="text-white text-4xl font-bold">Loading...</div>
    </div>
  );
};

export default LoadingPage;
