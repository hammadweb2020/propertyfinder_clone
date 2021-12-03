import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Footer from './footer';
import Navbar from './navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Property Finder Real Estate Clone</title>
      </Head>
      <Box maxWidth='1280px' m='auto'>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
}
