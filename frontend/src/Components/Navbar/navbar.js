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
      ".navbar-navigation-buttons": {
        color: "white",
        fontSize: "1.5rem",
        fontWeight: "bold",
        margin: "0 1rem",
      },
    },
  },
});

export default navbar;
