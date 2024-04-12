import Image from "next/image";
import React from "react";
import Container from "../container";
import { ChartBarSquareIcon, CursorArrowRaysIcon, FaceSmileIcon } from "@heroicons/react/20/solid";
import { useLanguage } from "../../contexts/translate";

const Benefits = () => {
  const { translations } = useLanguage();
  const data = {
    image: '/img/bulletpoints.svg',
    bullets: [
      {
        ...translations.services.bullets[0],
        icon: <ChartBarSquareIcon />,
      },
      {
        ...translations.services.bullets[1],
        icon: <CursorArrowRaysIcon />,
      },
      {
        ...translations.services.bullets[2],
        icon: <FaceSmileIcon />,
  
      },
    ],
  };
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
        id="Servicios"
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div>
            <Image
              src='/samples/TC-admin.webp'
              height="400"
              width={"600"}
              alt="Benefits"
              className={"object-cover"}
            />
          </div>
        </div>
        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>
            </div>
            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-customYellow rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}

export default Benefits;
