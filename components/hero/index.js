import Image from "next/image";
import Container from "../container";
import AutoPlaySlider from "./components/AutoPlaySlider";

const Hero = () => {
  const handleClick = (event) => {
    event.preventDefault();

    const element = document.getElementById('contacto');
    if(!element) return;
    element.scrollIntoView({ behavior: "smooth", block: 'center' });
  }

  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Optimiza tus procesos de negocio con <span className="text-customYellow">software</span>
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Eficiencia y rentabilidad para tu empresa. Desarrollamos soluciones a la medida de tus necesidades con tecnología de punta
            </p>
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <button
               onClick={handleClick}
                className="px-8 py-4 text-lg font-medium text-center text-white bg-customYellow rounded-md ">
                Contactar
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={'/img/hero.svg'}
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Container>
      <AutoPlaySlider />
    </>
  );
}

export default Hero;