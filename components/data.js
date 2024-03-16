import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  image: '/img/bulletpoints.svg',
  bullets: [
    {
      title: "Entendemos los puntos de dolor de tu negocio actual",
      desc: "Estudiaremos tus procesos operativos para identificar oportunidades, haremos comparativas con casos de éxito y te presentaremos un plan de acción.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Desarrollamos una solución a la medida",
      desc: "Construiremos una solución a la medida de tus necesidades, utilizando tecnologías de vanguardia y las mejores prácticas de desarrollo.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Aumente sus ingresos y reducimos costos",
      desc: "Te apoyaremos en la implementación de la solución, te capacitaremos y te acompañaremos en el proceso de adopción.",
      icon: <FaceSmileIcon />,

    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
