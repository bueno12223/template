import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { ToastContainer } from 'react-toastify'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css'
import localFont from 'next/font/local'
import { LanguageProvider } from "../contexts/translate";

const myFont = localFont({
  src: [
    {
      name: 'Helvetica Now',
      path: '../fonts/400/helvetica-now-display-400.woff2',
      style: 'normal',
    },
    {
      name: 'Helvetica Now',
      path: '../fonts/500/helvetica-now-display-500.woff2',
      style: 'bold',
    },
  ]
})

function MyApp({ Component, pageProps }) {

  return (
    <main className={myFont.className}>
    <ThemeProvider attribute="class">
      <LanguageProvider>
      <Component {...pageProps} />
      </LanguageProvider>
      <ToastContainer />
    </ThemeProvider>
    </main>
  );
}

export default MyApp;
