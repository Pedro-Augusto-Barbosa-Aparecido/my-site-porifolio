import type { AppProps } from 'next/app';
import { GlobalContextProvider } from '../context/GlobalContext';
import { globalStyles } from '../styles/global';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </div>
  );
}
