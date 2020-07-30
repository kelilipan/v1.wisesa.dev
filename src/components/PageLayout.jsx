import React from "react";
import MotionBox from "./MotionBox";
import { Box } from "@chakra-ui/core";
const Page = ({ children, ...props }) => {
  return (
    <MotionBox
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      transition={{ delay: 0.1 }}
      px={{ default: 6, md: 0 }}
      pt={4}
      {...props}
    >
      <Box px={{ default: "none", md: 6 }}>{children}</Box>
    </MotionBox>
  );
};

export default Page;
