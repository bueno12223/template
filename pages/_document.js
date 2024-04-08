import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import Script from 'next/script'


class MyDocument extends Document {
  render() {
    return (
      <Html>
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
          <meta name="google-adsense-account" content="ca-pub-4439391006607431" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E7NY2W59JZ"
          class="dark"
        />

        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${'${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}'});
          `}
        </Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
