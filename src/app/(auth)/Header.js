'use client'

import { Flex, useColorModeValue, Box, Image, Text } from "@chakra-ui/react"
import Link from "next/link"

const Header = () => {
    return (
        <Flex
            alignItems='center'
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
        >
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
    )
}

export default Header