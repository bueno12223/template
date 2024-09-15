import Image from "next/image";
import Container from "../container";
import AutoPlaySlider from "./components/AutoPlaySlider";
import Navbar from "../navbar";
import VideoBackground from "./components/VideoBackground";
import { useLanguage } from "../../contexts/translate";

const Hero = () => {
  const { translations } = useLanguage()
  const handleClick = async(event) => {
      const element = document.getElementById("contacto");
      if (!element) return;
      element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <VideoBackground src={['/video/bg-hero.webm', '/video/bg-hero.mp4']}>
      <Navbar />
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl uppercase font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              {translations.hero.title} <span className="text-customYellow">software</span>
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-800 lg:text-xl xl:text-2xl dark:text-gray-300">
            {translations.hero.text}
            </p>
            <div className="flex gap-2 items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <button
               onClick={handleClick}
                className="px-8 py-4 text-lg flex gap-2 font-medium text-center text-white bg-customYellow rounded-md ">
        {translations.hero.button}
              </button>
            </div>
          </div>
        </div>
      </Container>
      <AutoPlaySlider />
      </VideoBackground>
  );
}

export default Hero;