import React from "react";
import Head from "next/head";

import PageLayout from "../components/PageLayout";
const about = () => {
  return (
    <PageLayout px={{ default: 6, md: 0 }}>
      <Head>
        <title>About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hello
    </PageLayout>
  );
};

export default about;
