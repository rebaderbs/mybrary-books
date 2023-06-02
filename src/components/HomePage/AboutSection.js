import { VStack } from "@chakra-ui/react";
import { React } from "react";

function AboutSection () {
    return (
        <VStack spacing={8} p={16}>
        <div className="container-flex text-center">
            <h1 className="display-2">About</h1>
            <p className="lead">Placeholder for app description</p>
        </div>
        </VStack>
    );
}

export default AboutSection;