import React from "react";
import { Grid, Heading, Text } from "@chakra-ui/core";
import PageLayout from "../../components/PageLayout";
import cms from "../../util/cms";
import Head from "next/head";
import BlogCard from "../../components/BlogCard";

export const getStaticProps = async () => {
  const { projects } = await cms(`
    {
      projects(orderBy: createdAt_DESC) {
        id
        desc
        content
        publishedAt
        releaseDate
        slug
        source
        tags
        title
        url
        picture {
          handle
          height
          width
        }
      }
    }
  `);
  return {
    props: { project: projects },
  };
};
const index = ({ project }) => {
  return (
    <PageLayout mb={10}>
      <Head>
        <title>Project</title>
      </Head>
      <Heading as="h1">Project</Heading>
      <Text mt={2}>Some collection of my past works</Text>
      {!project.length ? (
        <Text mt={4} textAlign="center">
          No Content.
        </Text>
      ) : (
        <Grid
          mt={4}
          templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
          columnGap={2}
          rowGap={5}
        >
          {project.map((data, idx) => {
            return <BlogCard project key={idx} {...data} />;
          })}
        </Grid>
      )}
    </PageLayout>
  );
};

export default index;
