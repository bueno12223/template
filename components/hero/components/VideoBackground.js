import React from 'react';

/* const VideoBackground = ({ src, children, poster }) => {
  return (
    <div className="relative">
      <video autoPlay muted loop playsinline className="absolute w-full h-full object-cover" poster={poster}>
        <source src={src[0]} type="video/webm" />
        <source src={src[1]} type="video/mp4" />
      </video>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}

export default VideoBackground; */

const VideoBackground = ({ src, children, poster }) => {
  return (
    <div className="relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
        poster={poster}
      >
        <source src={src[0]} type="video/webm" />
        <source src={src[1]} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-70 blur-lg pointer-events-none"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
