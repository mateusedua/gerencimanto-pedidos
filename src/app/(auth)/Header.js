'use client'

import { Flex, useColorModeValue, Box, Image, Text, Menu, MenuButton, Avatar, MenuList, Center, MenuDivider, MenuItem } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { distroyCookies } from "../Context/cookies"

const Header = () => {

    const router = useRouter()

    const handleSair = () => {
        distroyCookies()
        router.push('/login')
    }

    return (
        <Flex
            alignItems='center'
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            position={'fixed'}
            zIndex={999}
            top={0}
            left={0}
            width={'100%'}
            justifyContent={'space-between'}
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
                        <span>Mateus Eduardo</span>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem onClick={handleSair}>Sair</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    )
}

export default Header