import React from 'react';
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: 'Citrusoft',
  description: 'Desarrollamos soluciones de software a la medida, entendemos mejoramos y automatizamos tus procesos operativos.',
  metadataBase: new URL('https://citrusoft.cloud/'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-DG0MRKQW5V" />
      <body>{children}</body>
    </html>
  )
}