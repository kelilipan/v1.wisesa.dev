import Head from "next/head";
import PageLayout from "../components/PageLayout";
import {
  Heading,
  Stack,
  Text,
  Flex,
  Code,
  useColorMode,
  Box,
} from "@chakra-ui/core";
import MotionBox from "../components/MotionBox";
import cms from "../util/cms";
import Image from "graphcms-image";
import { motion } from "framer-motion";
export const getStaticProps = async () => {
  const { siteConfigs } = await cms(`
    {
      siteConfigs {
        homePicture {
          handle
          width
          height
        }
      }
    }
  `);
  return {
    props: {
      ...siteConfigs[0],
    },
  };
};
export default function Home({ homePicture }) {
  const { colorMode } = useColorMode();

  return (
    <PageLayout
      d="flex"
      alignItems={{ md: "center" }}
      h="full"
      flexGrow={1}
      px={0}
      pt={0}
    >
      <Head>
        <title>Hi, I'm Wisesa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack
        flexDirection={{ default: "column-reverse", lg: "row" }}
        alignItems="center"
        justifyContent="space-between"
        px={{ default: 6, md: 0 }}
      >
        <Stack w={{ lg: 3 / 5 }} mt={{ _: 2, lg: 0 }}>
          <Heading as="h1" size="xl" mb={2}>
            Hi, I'm Wisesa. 🐱
          </Heading>
          <Text fontSize={{ _: 16, lg: 18 }}>
            An ordinary student from{" "}
            <Code d="inline" colorScheme="red" fontWeight="bold">
              Telkom University
            </Code>{" "}
            that has a strong enthusiasm for new technology. Interested in{" "}
            <Code d="inline" colorScheme="orange">
              machine learning
            </Code>
            ,{" "}
            <Code d="inline" colorScheme="red">
              web technologies
            </Code>
            , fall in love with{" "}
            <Code d="inline" colorScheme="blue">
              react.js
            </Code>{" "}
            and{" "}
            <Code d="inline" colorScheme="yellow">
              javascript
            </Code>
            .
          </Text>
        </Stack>
        <Flex w={{ lg: 2 / 5 }} justifyContent="center" alignItems="center">
          <motion.div
            whileTap={{
              scale: 0.95,
              rotate: -5,
              transition: { type: "spring", stiffness: 500 },
            }}
          >
            <Box boxSize="17em">
              <Image
                alt="it's me"
                image={homePicture}
                className="noDrag"
                style={{
                  borderRadius: "100%",
                  filter: colorMode === "dark" && "grayscale(45%)",
                }}
              />
            </Box>
          </motion.div>
        </Flex>
      </Stack>
    </PageLayout>
  );
}
