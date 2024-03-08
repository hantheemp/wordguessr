import { extendTheme } from "@chakra-ui/react";

const home = extendTheme({
    styles: {
        global: {
            ".home": 
            {
                padding: "4",
            },
            ".home-heading":
            {
                fontSize: "2rem",
                textAlign: "center",
                mb: "4",
                fontWeight: "bold",
            },
            ".home-text":
            {
                fontSize: "1.5rem",
                fontWeight: "normal",
            }
        },
    },
});

export default home;