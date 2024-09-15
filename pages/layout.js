import React from 'react';
import { GoogleAnalytics } from '@next/third-parties/google'
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
        <Head>
          <meta property="og:title" content="Citrusoft" />
          <meta property="og:description" content="Desarrollamos soluciones de software a la medida, entendemos mejoramos y automatizamos tus procesos operativos.." />
          <meta property="og:image" content="/samples/TC-admin.webp" />
          <Link rel="preconnect" href="https://fonts.googleapis.com" />
          <Link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
          <Link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
            <main>{children}</main>
            <GoogleAnalytics gaId="G-DG0MRKQW5V" />
            <Script
              id="facebook-pixel"
              strategy="afterInteractive"
            >
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${'386597180872877'}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${'386597180872877'}&ev=PageView&noscript=1`}
            />
          </noscript>
        </body>
    </html>
  )
}