// import App from 'next/app'
import {
  Box,
  ColorModeProvider,
  CSSReset,
  Stack,
  ThemeProvider,
} from "@chakra-ui/core";
import Router from "next/router";
import NProgress from "nprogress";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import theme from "../theme";

import "nprogress/nprogress.css";
import "../assets/css/style.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function CustomApp({ Component, pageProps }) {
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
            <Page>
              <Component {...pageProps} />
            </Page>
          </Box>
        </Stack>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// CustomApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default CustomApp;
