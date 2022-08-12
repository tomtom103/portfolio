import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '@shared/theme';
import createEmotionCache from '@shared/createEmotionCache';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '@redux/store';
import NavBar from '@components/NavBar';
import Copyright from '@components/Copyright';

const clientSideEmotionCache = createEmotionCache();

interface MyAppsProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppsProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <NavBar />
            <Component {...pageProps} />
            <Copyright />
          </ThemeProvider>
        </PersistGate>
      </Provider>
      
    </CacheProvider>
  )
}