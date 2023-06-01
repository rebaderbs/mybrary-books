import { VStack, Box } from "@chakra-ui/react";
import { React } from "react";

function LandingSection () {
    return (
        <VStack spacing={8} p={8} bg="secondary.light">

        <div className="container-flex align-items-center text-center">
        <Box>
            <img className="rounded mx-auto d-block" src="main-title.png" alt="Mybrary Books" />
        </Box>
        <Box p={8}>
            <blockquote className="blockquote">
               <p>A random literary quote will be here</p>
            </blockquote>
        </Box>
        </div>
        </VStack>
    );
}

export default LandingSection;