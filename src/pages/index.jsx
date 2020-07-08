import Head from "next/head";
import PageLayout from "../components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <Head>
        <title>Hi, I'm Wisesa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hello world
    </PageLayout>
  );
}
