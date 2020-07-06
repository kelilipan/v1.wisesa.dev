import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/core";
import { FaBars } from "react-icons/fa";

import Link from "./Link";
import ThemeSwitcher from "./ThemeSwitcher";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navLinks = [
    {
      href: "/link1",
      color: "currentColor",
      children: "link1",
    },
    {
      href: "/link2",
      color: "currentColor",
      children: "link2",
    },
    {
      href: "/about",
      color: "currentColor",
      children: "About",
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
        <Box as="button" onClick={onOpen} aria-label="Open menu" p={2}>
          <Box as={FaBars} size="18px" />
        </Box>
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
        <Stack>
          <Box p={2}>
            <ThemeSwitcher />
          </Box>
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
            </Stack>
          </DrawerBody>

          <DrawerFooter>wasd</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
