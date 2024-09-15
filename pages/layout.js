import React from 'react';
import { GoogleAnalytics } from '@next/third-parties/google'
import Head from 'next/head';
import Link from 'next/link';

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
        </body>
    </html>
  )
}