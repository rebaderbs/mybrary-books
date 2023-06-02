import React from "react";
import UserHeader from "./UserHeader";
import { Card, SimpleGrid, CardHeader, Heading, CardBody, Text, CardFooter, Button, ButtonGroup} from "@chakra-ui/react";

function MyBooks() {
    return (
        <>
        <UserHeader />
        <SimpleGrid margin={16} spacing={8} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card>
                <CardHeader>
                    <Heading size='md'>Book Title</Heading>
                    <img src="books.png" className="card-img-top" alt="default test image" />
                </CardHeader>
                <CardBody>
                    <Text>Author:</Text>
                    <Text>First Published:</Text>
                </CardBody>
                <CardFooter>
                    <ButtonGroup spacing="4">
                        <Button>View</Button>
                        <Button>Remove</Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <Heading size='md'>Book Title</Heading>
                <img src="books.png" className="card-img-top" alt="default test image" />
                </CardHeader>
                <CardBody>
                <Text>Author:</Text>
                <Text>First Published:</Text>
                </CardBody>
                <CardFooter>
                    <ButtonGroup spacing="4">
                        <Button>View</Button>
                        <Button>Remove</Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <Heading size='md'>Book Title</Heading>
                <img src="books.png" className="card-img-top" alt="default test image" />
                </CardHeader>
                <CardBody>
                <Text>Author:</Text>
                <Text>First Published:</Text>
                </CardBody>
                <CardFooter>
                <Button>View</Button>
                <Button>Remove</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <Heading size='md'>Book Title</Heading>
                <img src="books.png" className="card-img-top" alt="default test image" />
                </CardHeader>
                <CardBody>
                <Text>Author:</Text>
                <Text>First Published:</Text>
                </CardBody>
                <CardFooter>
                    <ButtonGroup spacing="4">
                        <Button>View</Button>
                        <Button>Remove</Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <Heading size='md'>Book Title</Heading>
                <img src="books.png" className="card-img-top" alt="default test image" />
                </CardHeader>
                <CardBody>
                <Text>Author:</Text>
                <Text>First Published:</Text>
                </CardBody>
                <CardFooter>
                    <ButtonGroup spacing="4">
                        <Button>View</Button>
                        <Button>Remove</Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <Heading size='md'>Book Title</Heading>
                <img src="books.png" className="card-img-top" alt="default test image" />
                </CardHeader>
                <CardBody>
                <Text>Author:</Text>
                <Text>First Published:</Text>
                </CardBody>
                <CardFooter>
                    <ButtonGroup spacing="4">
                        <Button>View</Button>
                        <Button>Remove</Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
  
         </SimpleGrid>
        </>
    );
}

export default MyBooks;