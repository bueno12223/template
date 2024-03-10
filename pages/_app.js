import { ThemeProvider } from "next-themes";
import { GoogleAdSense } from "nextjs-google-adsense";
import "../css/tailwind.css";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
       <GoogleAdSense publisherId="ca-pub-4439391006607431" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
