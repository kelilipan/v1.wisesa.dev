import React from "react";
import { Box, Text } from "@chakra-ui/core";
import Link from "../Link";
const Footer = () => {
  return (
    <Box textAlign="center" py={3} px={2} mt={2}>
      <Text fontSize={12} mb={1}>
        Made using <Link href="https://nextjs.org">Next.js</Link>,{" "}
        <Link href="https://chakra-ui.com">Chakra UI</Link>,{" "}
        <Link href="https://www.framer.com/motion/">Framer motion</Link>, and{" "}
        <Link href="https://www.datocms.com">DatoCMS</Link>. Hosted on{" "}
        <Link href="https://vercel.com/">Vercel</Link>.
      </Text>
      <Text color="gray.500" fontSize={11}>
        2020 ©
        <Link href="https://github.com/raisoturu" color="gray.500">
          Wisesa
        </Link>
        . All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
