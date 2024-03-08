import { extendTheme } from "@chakra-ui/react";

const gtl = extendTheme({
    styles: {
        global: {
            ".gtl": 
            {
                padding: "4",
            },
            ".gtl-heading":
            {
                fontSize: "2rem",
                textAlign: "center",
                mb: "4",
                fontWeight: "bold",
            },
            ".gtl-text":
            {
                fontSize: "1.5rem",
                fontWeight: "normal",
            }
        },
    },
});

export default gtl;