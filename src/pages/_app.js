// import NextApp from "next/app";
import {
  Box,
  ColorModeProvider,
  CSSReset,
  Stack,
  ChakraProvider,
} from "@chakra-ui/core";
import Router from "next/router";
import NProgress from "nprogress";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import theme from "../theme";

import "nprogress/nprogress.css";
import "../assets/css/style.css";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Stack
        minH="100vh"
        m="auto"
        maxW={[null, null, "2xl", "5xl"]}
        px={{ lg: 6 }}
      >
        <Navbar />
        <Box flexGrow={1}>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Box>
        <Footer />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
