
import Head from "next/head";
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";


import whatsAppIcon from "../public/img/ws.png"
import FloatingButton from "../components/floatingbutton";
import Video from "../components/video";
import Benefits from "../components/hero/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import { useLanguage } from "../contexts/translate";
import Image from "next/image";
import Calendar from "../components/calendar";

const Home = () => {
  const { translations } = useLanguage();
  const handleClick = () => {
    window.open('https://wa.me/50762288228?text=Hola%20quiero%20agendar%20una%20cita','_blank') 
  };
  return (
    <>
      <Hero />
      <SectionTitle
        pretitle={translations.services.pretitle}
        title={translations.services.title}
      />
      <Benefits />
      <SectionTitle
        pretitle={translations.us.pretitle}
        title={translations.us.title}
      />
      <Video />
      <SectionTitle
        pretitle={translations.testimonials.pretitle}
        title={translations.testimonials.title}
      >
      </SectionTitle>
      <Testimonials />
      <Faq />
      <Calendar />
      <Footer />
      <FloatingButton onClick={handleClick}>
        <Image src={whatsAppIcon}/>
      </FloatingButton>
    </>
  );
};

export default Home;
