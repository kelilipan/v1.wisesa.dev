import React from "react";
import PageLayout from "../../components/PageLayout";
import cms from "../../util/cms";
import Head from "next/head";
import {
  Stack,
  Text,
  Heading,
  Divider,
  useColorMode,
  Box,
} from "@chakra-ui/core";
// import Image from "graphcms-image";
import Markdown from "react-markdown";
import { blogPostRenderer } from "../../util/renderer";
export const getStaticProps = async ({ params }) => {
  const { post } = await cms(
    `
    query GetPost($slug: String!) {
      post(where: { slug: $slug }) {
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
    `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      data: post,
    },
  };
};

export const getStaticPaths = async () => {
  const { posts } = await cms(`
  {
    posts {
      slug
    }
  }
  `);
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

const Post = ({ data }) => {
  const publishedAt = new Date(data.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const { colorMode } = useColorMode();
  return (
    <PageLayout px={0}>
      <Head>
        <title>{data.title}</title>
      </Head>
      {/* <Image
        alt={data.title}
        image={{ ...data.picture, height: 450, width: 800 }}
        // style={{ height: "450px" }}
      /> */}
      <Stack px={{ default: 6, md: 0 }}>
        <Heading as="h1" fontSize={{ _: "4xl", md: "5xl" }}>
          {data.title}
        </Heading>
        <Text>{data.desc}</Text>
        <Text color="gray.400" fontSize={14}>
          Publised at {publishedAt}
        </Text>
        <Divider mt={4} />
        <Box mt={4}>
          <Markdown
            source={data.content}
            escapeHtml={false}
            renderers={blogPostRenderer(colorMode)}
          />
        </Box>
      </Stack>
    </PageLayout>
  );
};

export default Post;
