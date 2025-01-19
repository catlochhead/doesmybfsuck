import React from "react";
import { Link } from "react-router-dom";
import { Container, Flex, Text, VStack, Heading, Box } from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <Container maxW={"container.md"} px={4} h="100vh">
      <Flex
        h="100%"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        
      >
        <Heading
          as="h1"
          size="4xl"
          mb={6}
        >
          A community policing website
        </Heading>

        <VStack spacing={6} align="start" maxW="600px">
          
          
          <Text fontSize="lg" fontWeight="medium" color="gray.700">
            if you’re a man that wants to be taken off, venmo me $5{" "}
            <Text as="span" fontWeight="bold" >
              @iockedhead
            </Text>{" "}
            and make your case to{" "}
            <Text as="span" fontWeight="bold" >
              doesmybfsuck@gmail.com
            </Text>{" "}
            (results may vary)
          </Text>
          <Text fontSize="lg" fontWeight="medium" color="gray.700">
            if you’re a man that has wronged me, you’re on here forever. don’t
            even ask
          </Text>
          <Text fontSize="lg" fontWeight="medium" color="gray.700">
            if you found out your boyfriend sucks buy me a coffee at{" "}
            <Text
              as="a"
              href="https://ko-fi.com/catrionalochhead"
              color="blue.500"
              fontWeight="bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              ko-fi.com/catrionalochhead
            </Text>
          </Text>
          <Text fontSize="lg" fontWeight="medium" color="gray.700">
            :3c
          </Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default AboutPage;
