
import Head from "next/head";
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";

import Video from "../components/video";
import Benefits from "../components/hero/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import { useLanguage } from "../contexts/translate";

const Home = () => {
  const { translations } = useLanguage();
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
      <Footer />
    </>
  );
};

export default Home;
