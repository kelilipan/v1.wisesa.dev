// import NextApp from "next/app";
import {
  Box,
  ColorModeProvider,
  CSSReset,
  Stack,
  ThemeProvider,
} from "@chakra-ui/core";
import Router from "next/router";
import NProgress from "nprogress";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import theme from "../theme";

import "nprogress/nprogress.css";
import "../assets/css/style.css";
import { AnimatePresence } from "framer-motion";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function App({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
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
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
