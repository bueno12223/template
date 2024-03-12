import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import Script from "next/script";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Script
      id="adsbygoogle-init"
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src= "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4439391006607431"
      />
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}

export default MyApp;
