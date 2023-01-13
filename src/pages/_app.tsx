import type { AppProps } from 'next/app';
import { SearchContextProvider } from '../contexts/searchcontext';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearchContextProvider>
      <Component {...pageProps} />
    </SearchContextProvider>
  );
}
