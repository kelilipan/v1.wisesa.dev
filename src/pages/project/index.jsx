import React from "react";
import { Grid, Heading, Text } from "@chakra-ui/core";
import PageLayout from "../../components/PageLayout";
import cms from "../../util/cms";
import Head from "next/head";
export const getStaticProps = async () => {
  const { project } = await cms(`
    {
      posts {
        id
        content
        publishedAt
        title
        tags
        desc
        picture {
          handle
          width
          height
        }
      }
    }
  `);
  return {
    props: { project: [] },
  };
};
const index = ({ project }) => {
  return (
    <PageLayout px={{ default: 6, md: 0 }}>
      <Head>
        <title>Project</title>
      </Head>
      <Heading as="h1">Project</Heading>
      <Text mt={2}>Some collection of my past works</Text>
      {!project.length || true ? (
        <Text mt={4} textAlign="center">
          No Content.
        </Text>
      ) : (
        <Grid
          mt={4}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={2}
        >
          {posts.map((data, idx) => {
            return <Text key={idx}>{data.id}</Text>;
          })}
        </Grid>
      )}
    </PageLayout>
  );
};

export default index;
