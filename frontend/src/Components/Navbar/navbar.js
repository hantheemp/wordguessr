import { extendTheme } from "@chakra-ui/react";

const navbar = extendTheme({
  styles: {
    global: {
      ".heading": {
        align: "center",
        justify: "space-between",
        padding: "1rem",
        bg: "blue.500",
        color: "white",
        userSelect: "none",
      },
      ".navbar-navigation-button": {
        margin: "0 1rem",
        justify: "space-between",
      },
      ".navbar-navigation-button:hover": {
        bg: "blue.400",
      },
      ".navbar-navigation-button-text": {
        color: "white",
        fontSize: "1.0rem",
        fontWeight: "bold",
        margin: "0 1rem",
      },
    },
  },
});

export default navbar;
