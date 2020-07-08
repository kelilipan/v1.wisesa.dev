import React from "react";
import { Stack, Code, Heading, Text } from "@chakra-ui/core";
import { useRouter } from "next/router";
import MotionBox from "../components/MotionBox";
import Link from "../components/Link";

const NotFound = () => {
  const { asPath } = useRouter();
  return (
    <Stack textAlign="center" mt={8}>
      <Heading fontSize={{ _: "100px", md: "120px" }} className="noSelect">
        4
        <MotionBox
          animate={{ y: [0, 5, 0] }}
          transition={{ delay: 0.2, type: "spring", duration: 0.5 }}
          initial={{ y: 5 }}
          whileHover={{ y: -10 }}
          whileTap={{ scale: 0.9, rotate: 45 }}
          d="inline-block"
        >
          😭
        </MotionBox>
        4
      </Heading>
      <Text mt={2}>
        The page <Code>{asPath}</Code> does not exist.
      </Text>
      <Text>
        <Link route href="/">
          Back to home.
        </Link>
      </Text>
    </Stack>
  );
};

export default NotFound;
