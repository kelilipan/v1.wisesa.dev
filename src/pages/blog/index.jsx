import React from "react";
import { Grid, Heading, Text } from "@chakra-ui/core";
import PageLayout from "../../components/PageLayout";
import cms from "../../util/cms";
import Head from "next/head";
import BlogCard from "../../components/BlogCard";
export const getStaticProps = async () => {
  const { posts } = await cms(`
    {
      posts(orderBy: publishedAt_DESC) {
        id
        content
        publishedAt
        title
        tags
        desc
        slug
        picture {
          handle
          width
          height
        }
      }
    }
  `);
  return {
    props: { posts },
  };
};
const index = ({ posts }) => {
  return (
    <PageLayout>
      <Head>
        <title>Blog</title>
      </Head>
      <Heading as="h1">Blog</Heading>
      <Text mt={2}>Some tech stuff and my random thoughts</Text>
      {!posts.length ? (
        <Text mt={4} textAlign="center">
          No post.
        </Text>
      ) : (
        <Grid
          mt={6}
          templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
          gap={2}
          rowGap={5}
        >
          {posts.map((data, idx) => {
            return <BlogCard key={idx} {...data} />;
          })}
        </Grid>
      )}
    </PageLayout>
  );
};

export default index;
