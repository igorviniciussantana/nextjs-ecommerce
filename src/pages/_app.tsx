import { Provider } from 'react-redux'
import {store} from '../store/store'
import "@styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "@components/imports";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      </Provider>

  );
}
