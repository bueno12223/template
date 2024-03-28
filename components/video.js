import { useState } from "react";
import Container from "./container";

const Video = () => {
  return (
    <Container className='video-container'>
      <div id='Nosotros' className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
      <div
  className="relative bg-indigo-300 cursor-pointer aspect-w-16 aspect-h-9 bg-gradient-to-tr from-purple-400 to-indigo-700">
    <iframe
      src="https://www.youtube-nocookie.com/embed/-kX8KW3i5Rc"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
</div>
      </div>
    </Container>
  );
}

export default Video;