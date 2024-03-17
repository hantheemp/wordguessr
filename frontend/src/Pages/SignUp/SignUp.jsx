import {
  Box,
  Button,
  ChakraProvider,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  Spacer,
} from "@chakra-ui/react";
import Logo from "../../Components/Assets/Logo.png";
import OAuthButtonGroup from "./OAuthButtonGroup.jsx";
import PasswordField from "./PasswordField.jsx";
import signin from "./signup.js";

const SignUp = () => (
  <ChakraProvider theme={signin}>
    <Container
      maxW="lg"
      py={{
        base: "12",
        md: "24",
      }}
      px={{
        base: "0",
        sm: "8",
      }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Flex className="flex-logo">
            <img src={Logo} alt="Logo" />
          </Flex>
          <Stack
            spacing={{
              base: "2",
              md: "3",
            }}
            textAlign="center"
          ></Stack>
        </Stack>
        <Box
          className="credential-holder"
          py={{
            base: "0",
            sm: "8",
          }}
          px={{
            base: "4",
            sm: "10",
          }}
          bg={{
            base: "transparent",
            sm: "#fff", // Mavi arka plan rengi
          }}
          boxShadow={{
            base: "none",
            sm: "md",
          }}
          borderRadius={{
            base: "none",
            sm: "xl",
          }}
        >
          

          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <PasswordField />
              <PasswordField />
            </Stack>
            <HStack justify="space-between"></HStack>
            <Stack spacing="6">
              <Button>Sign up</Button>
              <HStack>
                <Divider />
                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  </ChakraProvider>
);

export default SignUp;
