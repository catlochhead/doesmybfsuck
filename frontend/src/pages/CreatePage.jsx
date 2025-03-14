import React, { useState } from "react";
import { Input, HStack, Flex, Button, VStack, Heading } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useNameStore } from "../store/name";
import { Toaster, toaster } from "@/components/ui/toaster"

const CreatePage = () => {
    const [newName, setNewName] = useState({
        firstname: "",
        lastname: "",
    });

    
    const { createName } = useNameStore();

    const handleAddName = async () => {
        const { success, message } = await createName(newName);
        console.log("Success:", success);
        console.log("Message:", message);
    };

    return (
        <Flex justifyContent="center" alignItems="center" minH="100vh">
            <VStack spacing = {6}>
                <Heading as="h1" size="6xl" mb={6}>
                    Add a man that sucks
                </Heading>
                <HStack>
                    
                        <Input
                            placeholder="John"
                            name="firstname"
                            value={newName.firstname}
                            onChange={(e) =>
                                setNewName({ ...newName, firstname: e.target.value })
                            }
                            />
                        <Input
                            placeholder="Doe"
                            name="lastname"
                            value={newName.lastname}
                            onChange={(e) =>
                                setNewName({ ...newName, lastname: e.target.value })
                            }
                        />

                    <Button size="sm" type="button" 
                    onClick={() => {
                    handleAddName();
                    toaster.create({
                        title: `Got it — he SUCKS!`,
                        type: "success",
                        duration: 4000,
                      });
                    }}>
                        Submit
                    </Button>
                </HStack>
            </VStack>
        </Flex>
    );
};

export default CreatePage;
