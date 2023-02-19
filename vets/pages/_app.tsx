import '../styles/globals.css'
import type { AppProps } from 'next/app'


import Head from 'next/head';
import { AppShell, MantineProvider } from '@mantine/core';
import AppShellExample from '../components/VetsAppShell';
import VetsAppShellLink from '../components/VetsAppShellLink';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Amigos Vets</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
       
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          fontFamily: 'Open Sans, sans-serif,Georgia serif',
          

        }}
      >
        
        <Component {...pageProps} />
        <VetsAppShellLink/>
      </MantineProvider>
    </>
  );
}