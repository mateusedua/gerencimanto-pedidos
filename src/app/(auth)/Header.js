'use client'

import { Flex, useColorModeValue, Box, Image, Text, Menu, MenuButton, Avatar, MenuList, Center, MenuDivider, MenuItem, Button, Input } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { distroyCookies } from "../../Context/cookies"
import { useEffect, useState } from "react"
import { getNome } from "../../Context/cookies"

const Header = () => {

    const router = useRouter()
    const path = usePathname()
    const [nome, setNome] = useState()

    const handleSair = () => {
        distroyCookies()
        router.push('/login')
    }

    useEffect(() => {
        const result = getNome()
        result.then(item => {
            setNome(item.value)
        })
    }, [])

    return (
        <Flex
            alignItems='center'
            py={{ base: 2 }}
            px={{ base: 4 }}
            position={'fixed'}
            zIndex={999}
            top={0}
            left={0}
            width={'100%'}
            direction={'column'}
        >
            <Flex justifyContent={'space-between'}
                width={'100%'}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                py={{ base: 2 }}
            >
                <Flex>
                    <Box marginRight='50px'>
                        <Link href='/'>
                            <Image
                                borderRadius='full'
                                boxSize='50px'
                                src="logo.png"
                                cursor='pointer'
                            />
                        </Link>
                    </Box>
                    <Link
                        href="/"
                    >
                        <Text fontSize='xl'
                            cursor='pointer'
                            fontWeight={560} p={2}
                            color={useColorModeValue('gray.600', 'gray.200')}
                            _hover={{
                                color: useColorModeValue('gray.800', 'white'),
                            }}>Início</Text>
                    </Link>
                    <Link
                        href="/Produto"
                    >
                        <Text fontSize='xl'
                            cursor='pointer'
                            fontWeight={560} p={2}
                            color={useColorModeValue('gray.600', 'gray.200')}
                            _hover={{
                                color: useColorModeValue('gray.800', 'white'),
                            }}>Produto</Text>
                    </Link>
                    <Link
                        href='/Cliente'
                    >
                        <Text fontSize='xl'
                            cursor='pointer'
                            fontWeight={560} p={2}
                            color={useColorModeValue('gray.600', 'gray.200')}
                            _hover={{
                                color: useColorModeValue('gray.800', 'white'),
                            }}>Cliente</Text>
                    </Link>
                </Flex>
                <Menu>
                    <MenuButton
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                    >
                        <Avatar
                            size={'md'}
                        />
                    </MenuButton>
                    <MenuList alignItems={'center'}>
                        <br />
                        <Center>
                            <Avatar
                                size={'lg'}
                            />
                        </Center>
                        <br />
                        <Center>
                            <span>{nome}</span>
                        </Center>
                        <br />
                        <MenuDivider />
                        <MenuItem onClick={handleSair}>Sair</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            {
                path === '/Produto' &&
                <Flex width={'100%'} padding={7} direction={'column'} gap={3}>
                    <Button size={'md'} colorScheme="green" maxW={150}>Cadastrar</Button>
                    <Input variant={'filled'} maxW={'lg'} placeholder="Pesquisar ..." />
                </Flex>
            }
        </Flex>
    )
}

export default Header