import React from "react";
import NextLink from "next/link";
import { Link as ChakraLink, useColorMode } from "@chakra-ui/core";
const Link = ({ route, href, linkAs, nextProps, children, ...props }) => {
  const { colorMode } = useColorMode();
  const linkProps = {
    ...props,
    color: props.color || (colorMode === "dark" ? "blue.300" : "blue.500"),
  };
  if (route) {
    console.log(linkProps);
    return (
      <NextLink as={linkAs} href={href} passHref>
        <ChakraLink {...linkProps}>{children}</ChakraLink>
      </NextLink>
    );
  }
  return (
    <ChakraLink href={href} {...linkProps}>
      {children}
    </ChakraLink>
  );
};
Link.defaultProps = {
  route: false,
};
export default Link;
