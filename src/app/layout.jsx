import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from '@/context';

import Header from '../components/Header/Header';
import Navbar from '../components/NavBar/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
