

import { Box, Divider, Flex, Heading, VStack, SimpleGrid, HStack, Button} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";


export default function CreateUser(){
    return(
        <Box>
          <Header />
          <Flex width="100%" my="6" maxW={1480} mx="auto" px="6">
            <Sidebar />

            <Box
            flex="1"
            borderRadius={8}
            bg="gray.800"
            p={8}
            >
              <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>
              <Divider my="6" borderColor="gray.700" />

              <VStack spacing="8">
                <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                    <Input name="name" label="Nome Completo" />
                    <Input name="email" type="email" label="E-mail Completo" />
                </SimpleGrid>
                <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                    <Input name="password" label="Senha" type="password" />
                    <Input name="password_confirmation" type="password" label="Confirmar Senha" />
                </SimpleGrid>
              </VStack>

             <Flex mt="8" justify="flex-end">
                <HStack spacing="4">
                    <Link href="/users">
                      <Button colorScheme="whiteAlpha">Cancelar</Button>
                    </Link>
                    <Button colorScheme="pink">Salvar</Button>
                </HStack>
             </Flex>

            </Box>
              
          </Flex>
        </Box>
    )
}