import { Source_Sans_3 } from 'next/font/google';

import './globals.css';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
});


//todo pending replacements
const description = 'pending';
const siteName = 'pending';
const url = 'pending';
// const ogImage = `${url}/images/50-react-projects-og.jpg`;
const ogImage = 'https://res.cloudinary.com/colbyfayock/image/upload/v1631114769/50-react-projects-og.jpg';

export const metadata = {
  title: {
    template: `%s | ${siteName}`,
    default: siteName,
  },
  description,
  openGraph: {
    title: 'Acme',
    description,
    url,
    type: 'website',
    siteName,
    locale: 'en_US',
    images: [
      {
        url: ogImage,
        width: 2024,
        height: 1012,
        alt: '50 Projects for React & the Static Web - Learn by doing with this FREE ebook!'
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    creator: '@colbyfayock',
    images: [ogImage],
  },
  authors: [{ name: 'Colby Fayock', url: 'https://colbyfayock.com/' }],
  creator: 'Colby Fayock',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sourceSans3.className}>
      <body>
        { children }
      </body>
    </html>
  );
}