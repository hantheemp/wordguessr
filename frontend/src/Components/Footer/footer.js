import { extendTheme } from "@chakra-ui/react";

const footer = extendTheme({
  styles: {
    global: {
      ".footer-logo": {
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        width: "20%",
        height: "20%",
        userSelect: "none",
        borderRadius: "50%",
      },
      ".footer-button-group": {
        margin: "1.5rem",
      },
    },
  },
});

export default footer;
