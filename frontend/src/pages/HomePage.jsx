import { Button, HStack, Flex, Heading, VStack} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Flex justifyContent="center" alignItems="center" minH="100vh">
        <VStack>
        <Heading
        size="6xl">
            Does Your Boyfriend Suck?
        </Heading>
        <Heading size="2xl">a website by Catriona Lochhead</Heading>
    <HStack spacing={4}>
      <Button as={Link} to="/add" colorScheme="blue">
        Add a man that sucks
      </Button>
      <Button as={Link} to="/search" colorScheme="teal">
        See if your man sucks
      </Button>
    </HStack>
    </VStack>
    </Flex>
    
  );
};

export default HomePage;