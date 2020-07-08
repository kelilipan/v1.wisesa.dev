import React from "react";
import NextLink from "next/link";
import { Link as ChakraLink, useColorMode } from "@chakra-ui/core";
const Link = ({ route, href, linkAs, nextProps, children, ...props }) => {
  const { colorMode } = useColorMode();
  const linkProps = {
    ...props,
    color: props.color || (colorMode === "dark" ? "blue.300" : "blue.500"),
    children,
  };
  if (route) {
    return (
      <NextLink as={linkAs} href={href} passHref>
        <ChakraLink {...linkProps} />
      </NextLink>
    );
  }
  return <ChakraLink href={href} {...linkProps} isExternal />;
};
Link.defaultProps = {
  route: false,
};
export default Link;
