import type { AppProps } from 'next/app';
import { DataContextProvider } from '../contexts/ApiDataContext';
import { SearchContextProvider } from '../contexts/searchcontext';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearchContextProvider>
      <DataContextProvider>
        <Component {...pageProps} />
      </DataContextProvider>
    </SearchContextProvider>
  );
}
