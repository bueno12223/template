import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { ToastContainer } from 'react-toastify'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <ToastContainer />
    </ThemeProvider>
    </>
  );
}

export default MyApp;
