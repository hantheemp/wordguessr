import React from "react";
import { Box, Flex, Spacer, Heading, Button, ChakraProvider } from "@chakra-ui/react";
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
          className="navbar-navigation-buttons"
          as="a"
          variant="link"
          href="/"
          colorScheme="whiteAlpha"
        >
          Home
        </Button>
        <Button
          className="navbar-navigation-buttons"
          as="a"
          variant="link"
          href="/about"
          colorScheme="whiteAlpha"
        >
          About
        </Button>
        <Button
          className="navbar-navigation-buttons"
          as="a"
          variant="link"
          href="/guess"
          colorScheme="whiteAlpha"
        >
          Guess the Language
        </Button>
      </Box>

      <Box>
        <Button variant="outline" colorScheme="whiteAlpha">
          Sign In
        </Button>
        <Button ml={4} colorScheme="whiteAlpha">
          Sign Up
        </Button>
      </Box>
    </Flex>
    </ChakraProvider>

  );
};

export default Navbar;
