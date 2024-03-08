import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Heading,
  Button,
  ChakraProvider,
} from "@chakra-ui/react";
import navbar from "./navbar.js";

const Navbar = () => {
  return (
    <ChakraProvider theme={navbar}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding="1rem"
        bg="blue.500"
        color="white"
      >
        <Flex align="center" mr={5}>
          <Heading className="heading" as="h1" size="md">
            WordGuessr
          </Heading>
        </Flex>

        <Box>
          <Button
            className="navbar-navigation-button"
            as="a"
            variant="link"
            href="/"
            colorScheme="whiteAlpha"
          >
            <Heading
              className="navbar-navigation-button-text"
              as="h1"
              size="2.5rem"
            >
              Home
            </Heading>
          </Button>
          <Button
            className="navbar-navigation-button"
            as="a"
            variant="link"
            href="/about"
            colorScheme="whiteAlpha"
          >
            <Heading
              className="navbar-navigation-button-text"
              as="h1"
              size="2.5rem"
            >
              About
            </Heading>
          </Button>
          <Button
            className="navbar-navigation-button"
            as="a"
            variant="link"
            href="/gtl"
            colorScheme="whiteAlpha"
          >
            <Heading
              className="navbar-navigation-button-text"
              as="h1"
              size="2.5rem"
            >
              Guess The Language
            </Heading>
          </Button>
        </Box>

        <Box>
          <Button
            className="navbar-navigation-button"
            as="a"
            variant="link"
            colorScheme="whiteAlpha"
            href="/signin"
          >
            <Heading
              className="navbar-navigation-button-text"
              as="h1"
              size="2.5rem"
            >
              Sign In
            </Heading>
          </Button>
          <Button
            className="navbar-navigation-button"
            as="a"
            variant="link"
            ml={4}
            colorScheme="whiteAlpha"
            href="/signup"
          >
            <Heading
              className="navbar-navigation-button-text"
              as="h1"
              size="2.5rem"
            >
              Sign Up
            </Heading>
          </Button>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Navbar;
