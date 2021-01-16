import Head from "next/head";
import { QueryClientProvider, QueryClient } from "react-query";

import StoreProvider from "../src/context/context";
import Header from "../src/components/layout/Header";
import Footer from "../src/components/layout/Footer";

import { HEADERLOGOSTR } from "../src/constants/constants";
import "../src/styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{HEADERLOGOSTR}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <div className="relative flex flex-col w-full min-h-screen bg-gray-100">
            <Header />
            <Component {...pageProps} />
            <Footer />
          </div>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
