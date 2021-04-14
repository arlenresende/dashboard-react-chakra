import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true} : ProfileProps){
    return(
        <Flex
            align="center"
            >

            { showProfileData && (
                <Box mr="4" textAlign="right">
                <Text>Arlen Resende</Text>
                <Text color="gray.300" fontSize="small">arlenaraujo12@gmail.com</Text>
                </Box>
            )}

            <Avatar size="md" name="Arlen Resende" src="http://github.com/arlenresende.png" />
            
            </Flex>
    )
}