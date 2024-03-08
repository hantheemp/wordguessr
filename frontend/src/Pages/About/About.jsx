import React from "react";
import { Box, ChakraProvider, Flex, Heading, Text } from "@chakra-ui/react";
import about from "./about.js";

const About = () => {
  return (
    <ChakraProvider theme={about}>
      <Flex>
        <Box p="4" className="about">
          <Heading as="h2" className="about-heading">
            What is WordGuessr?
          </Heading>
          <Text as="h3" className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            tortor non justo maximus fermentum. Sed euismod, nisl nec cursus
            eleifend, odio mi consectetur libero, in fermentum tortor turpis
            vitae elit. Morbi sed nulla ac metus sodales volutpat nec eget
            purus. Quisque ut leo vel leo fringilla scelerisque ac sit amet dui.
            Nam varius ante sed nibh varius, ut volutpat elit tincidunt.
          </Text>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default About;
