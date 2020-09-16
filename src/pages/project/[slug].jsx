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
  Button,
} from "@chakra-ui/core";
import Image from "graphcms-image";
import Markdown from "react-markdown";
import { blogPostRenderer } from "../../util/renderer";
import { FaCode } from "react-icons/fa";
export const getStaticProps = async ({ params }) => {
  const { project } = await cms(
    `
    query GetPost($slug: String!) {
      project(where: { slug: $slug }) {
        id
        content
        releaseDate
        title
        tags
        desc
        slug
        url
        source
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
      data: project,
    },
  };
};

export const getStaticPaths = async () => {
  const { projects } = await cms(`
  {
    projects {
      slug
    }
  }
  `);
  return {
    paths: projects.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

const Post = ({ data }) => {
  const { title, desc, content, picture, releaseDate, url, source } = data;
  const { colorMode } = useColorMode();
  return (
    <PageLayout px={0}>
      <Head>
        <title>{title}</title>
      </Head>
      <Image
        alt={title}
        image={{ ...picture }}
        maxWidth={928}
        style={{ maxHeight: "430px" }}
      />
      <Stack px={{ default: 6, md: 0 }} mb={10}>
        <Heading as="h1" fontSize={{ _: "4xl", md: "5xl" }}>
          {title}
        </Heading>
        <Text>{desc}</Text>
        <Text color="gray.400" fontSize={14}>
          Released at {releaseDate}
        </Text>
        <Divider mt={4} />
        <Box mt={4}>
          <Markdown
            source={content}
            escapeHtml={false}
            renderers={blogPostRenderer(colorMode)}
          />
          <Box mt="4">
            {url && (
              <Button
                colorScheme="blue"
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href={url}
                leftIcon="arrow-forward"
                size="sm"
                mr="2"
              >
                Visit project
              </Button>
            )}
            {source && (
              <Button
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href={source}
                size="sm"
                leftIcon={FaCode}
              >
                Source code
              </Button>
            )}
          </Box>
        </Box>
      </Stack>
    </PageLayout>
  );
};

export default Post;
