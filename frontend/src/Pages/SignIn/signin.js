import { extendTheme } from "@chakra-ui/react";

const signin = extendTheme({
    styles:{
        global:{
            ".flex-logo":{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem",
            },
            ".flex-logo img":{
                width: "30%",
                height: "30%",
                borderRadius: "50%",
            },
        }
    }
});

export default signin;