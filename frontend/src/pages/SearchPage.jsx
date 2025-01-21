import React, { useState } from "react";
import { Input, HStack, Flex, Button, VStack, Heading, Text } from "@chakra-ui/react";
import { useNameStore } from "../store/name";

const SearchPage = () => {
    const [query, setQuery] = useState({
        firstname: "",
        lastname: "",
    });
    const [outputMessage, setOutputMessage] = useState("");
    const [showSearchAgain, setShowSearchAgain] = useState(false);

    const { searchName } = useNameStore();

    const handleSearch = async () => {
        const { success, data, message } = await searchName(query.firstname.trim(), query.lastname.trim());
        if (success) {
            setOutputMessage(`Yep, ${data.firstname} ${data.lastname} does suck.`);
        } else {
            setOutputMessage(`Nice! ${query.firstname} ${query.lastname} doesn't suck... yet.`);
        }
        setShowSearchAgain(true); // Show the "Search Again" button
    };

    const resetSearch = () => {
        setQuery({ firstname: "", lastname: "" });
        setOutputMessage("");
        setShowSearchAgain(false); // Reset the search form
    };

    return (
        <Flex justifyContent="center" alignItems="center" minH="100vh">
            <VStack spacing={6}>
                {!showSearchAgain ? (
                    <>
                        <Heading as="h1" size="6xl" mb={6}>
                            Search for a man that sucks
                        </Heading>
                        <HStack>
                            <Input
                                placeholder="John"
                                value={query.firstname}
                                onChange={(e) => setQuery({ ...query, firstname: e.target.value })}
                            />
                            <Input
                                placeholder="Doe"
                                value={query.lastname}
                                onChange={(e) => setQuery({ ...query, lastname: e.target.value })}
                            />
                            <Button size="sm" type="button" onClick={handleSearch}>
                                Search
                            </Button>
                        </HStack>
                    </>
                ) : (
                    <>
                        <Heading as="h1" size="lg">
                            {outputMessage}
                        </Heading>
                        <Button size="sm" type="button" onClick={resetSearch}>
                            Search for someone else
                        </Button>
                    </>
                )}
            </VStack>
        </Flex>
    );
};

export default SearchPage;