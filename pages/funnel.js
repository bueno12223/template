
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
import PainPoints from "../components/painPoints";

const Home = () => {
  const { translations } = useLanguage();
  const handleClick = () => {
    window.open('https://wa.me/50762288228','_blank') 
  };
  return (
    <>
      <SectionTitle
        pretitle={translations.funnel.hero.pretitle}
        title={translations.funnel.hero.text}
      />
      <Benefits page='funnel' />
      <SectionTitle
        pretitle={'Servicios'}
        title={'Agenda tu Llamada DEMO aquí'}
      />
      <Calendar />
      <SectionTitle
      title={'Si tienes una empresa o gestionas procesos complejos, seguramente te pasa que...'}
        pretitle={'En Esta Llamada Analizaremos Tu Negocio, Crearemos un Roadmap para Tener un MVP Listo en 90 Días, y Exploraremos Cómo Podemos Colaborar para Implementar el Plan.'}
      />
      <PainPoints />
      <SectionTitle
        pretitle={translations.testimonials.pretitle}
        title={translations.testimonials.title}
      >
      </SectionTitle>
      <Testimonials />
      <SectionTitle
        pretitle={translations.us.pretitle}
        title={translations.us.title}
      />
      <Video />
      <Footer />
      <FloatingButton onClick={handleClick}>
        <Image src={whatsAppIcon}/>
      </FloatingButton>
    </>
  );
};

export default Home;
