import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/core";
import { FaBars, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

import Link from "./Link";
import ThemeSwitcher from "./ThemeSwitcher";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navLinks = [
    {
      href: "/blog",
      color: "currentColor",
      children: "Blog",
    },
    {
      href: "/project",
      color: "currentColor",
      children: "Project",
    },
    {
      href: "/about",
      color: "currentColor",
      children: "About",
    },
  ];
  const externalLinks = [
    {
      url: "https://github.com/svspicious",
      icon: FaGithub,
    },
    {
      url: "https://www.linkedin.com/in/anvaqta/",
      icon: FaLinkedin,
    },
    {
      url: "https://svspicious.medium.com/",
      icon: FaMedium,
    },
    {
      url: "https://read.cv/wisesa",
      icon: ImProfile,
    },
  ];
  return (
    <Box>
      <Box
        d={{ default: "flex", md: "none" }}
        justifyContent="space-between"
        p={4}
      >
        <Stack alignItems="flex-start" isInline>
          <Link
            route
            href="/"
            fontWeight="bold"
            children="Wisesa"
            mr={4}
            p={2}
          ></Link>
        </Stack>
        <Stack isInline p={2}>
          <ThemeSwitcher mr={3} />
          <Box as="button" onClick={onOpen} aria-label="Open menu">
            <Box as={FaBars} boxSize="18px" />
          </Box>
        </Stack>
      </Box>
      <Box
        d={{ default: "none", md: "flex" }}
        justifyContent="space-between"
        p={4}
      >
        <Stack alignItems="flex-start" isInline>
          <Link
            route
            href="/"
            fontWeight="bold"
            children="Wisesa"
            mr={4}
            p={2}
          />
          {navLinks.map((item, i) => (
            <Link key={i} route {...item} p={2} />
          ))}
        </Stack>
        <Stack isInline alignItems="center">
          <ThemeSwitcher />
          {externalLinks.map((data, i) => (
            <Link key={i} href={data.url} color="currentColor" py={2} px="1px">
              <Box as={data.icon} size="22px" />
            </Link>
          ))}
        </Stack>
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody>
            <Stack alignItems="flex-start" spacing={2}>
              {navLinks.map((item, i) => (
                <Link key={i} route {...item} p={2} />
              ))}
              <Stack mt={2} isInline>
                {externalLinks.map((data, i) => (
                  <Link key={i} href={data.url} color="currentColor" p={2}>
                    <Box as={data.icon} size="26px" />
                  </Link>
                ))}
              </Stack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
