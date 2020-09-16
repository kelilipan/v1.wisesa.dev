import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <meta name="theme-color" content="#333333" />
          <meta name="msapplication-TileColor" content="#333333" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
