
import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";

const Home = () => {
  return (
    <>
      <Head>
        <title>CitruSoft</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Benefits data={benefitOne} />
      <SectionTitle
        pretitle="Mira un video"
        title="Mira cómo funciona" />
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="
        Lo que dicen nuestros clientes"
      >

      </SectionTitle>
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
