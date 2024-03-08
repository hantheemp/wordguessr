import {
  ButtonGroup,
  ChakraProvider,
  Container,
  Flex,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../Assets/Logo.png";
import footer from "./footer.js";

const Footer = () => (
  <ChakraProvider theme={footer}>
    <Flex
      as="footer"
      bg="blue.400"
      role="contentinfo"
      align="center"
      justify="space-between"
      color="white"
    >
      <Stack
        spacing={{
          base: "4",
          md: "5",
        }}
      >
        <Stack justify="space-between" direction="row" align="center">
          <Flex m="0.5rem">
            <img src={Logo} alt="Logo" className="footer-logo" />
          </Flex>
          <ButtonGroup m="0.5rem" variant="tertiary">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter />}
            />
          </ButtonGroup>
        </Stack>
        <Text m="0.5rem" fontSize="sm" color="fg.subtle">
          &copy; {new Date().getFullYear()} WordGuessr Inc. All rights reserved.
        </Text>
      </Stack>
    </Flex>
  </ChakraProvider>
);

export default Footer;
