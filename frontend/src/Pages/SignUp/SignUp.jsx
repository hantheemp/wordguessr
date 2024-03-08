import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import signup from "./signup.js";

const SignUp = () => {
  return (
    <ChakraProvider theme={signup}>
      <h1>SignUp</h1>
    </ChakraProvider>
  );
};

export default SignUp;
