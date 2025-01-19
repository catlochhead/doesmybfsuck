import React from "react";
import { Link } from "react-router-dom";
import { Container, Flex, Text} from "@chakra-ui/react";



function Navbar() {

  return (
    <Container maxW={"1140px"} px ={4}>
        <Flex
            h = {16}
            alignItems={"center"}
            justifyContent ={"space-between"}
            flexDir ={{
                base:"column",
                sm:"row"
            }}
        >
            <Text as={Link} to="/">
                Does Your Boyfriend Suck?
            </Text>
            <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </nav> 
        </Flex>
    </Container>
  );
}

export default Navbar;