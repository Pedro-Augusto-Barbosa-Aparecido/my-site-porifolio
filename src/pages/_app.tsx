import type { AppProps } from "next/app";
import { GlobalContextProvider } from "../context/GlobalContext";
import { globalStyles } from "../styles/global";
import { Header } from "../components/Header/index";
import { Footer } from "../components/Footer";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalContextProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </GlobalContextProvider>
    </div>
  );
}
