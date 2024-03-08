import { extendTheme } from "@chakra-ui/react";

const about = extendTheme({
        styles: {
        global: {
            ".about": {
            padding: "4",
            },
            ".about-heading": {
            fontSize: "2rem",
            textAlign: "center",
            mb: "4",
            fontWeight: "bold",
            },
            ".about-text": {
            fontSize: "1.5rem",
            fontWeight: "normal",
            },
        },
        },
    });

export default about;