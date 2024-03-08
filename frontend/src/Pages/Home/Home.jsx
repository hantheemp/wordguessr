import React from "react";
import { Box, ChakraProvider, Flex, Heading, Text } from "@chakra-ui/react";
import home from "./home.js";

const Home = () => {
    return(
        <ChakraProvider theme={home}>
            <Flex>
                <Box p="4" className="home">
                    <Heading as="h2" className="home-heading">
                        Welcome to WordGuessr!
                    </Heading>
                    <Text as="h3" className="home-text">
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

export default Home;