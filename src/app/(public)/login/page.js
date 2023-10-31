'use client'

import {
    Flex,
    Input,
    useColorModeValue,
    Image,
    Button,
    useMediaQuery,
    InputGroup,
    InputRightElement
} from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import isEmail from "validator/lib/isEmail"
import { useUserProvider } from "@/app/Context/UserProvider"
import { MdVisibility } from 'react-icons/md'
import { useState } from "react"

const Login = () => {

    const [show, setShow] = useState(false)
    const [isLargerThan300] = useMediaQuery('(max-width: 700px)')
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { login, isLoading } = useUserProvider()
    const router = useRouter()


    const handleLogin = async (data) => {
        const status = await login(data)

        if (status === 200) {
            return router.push('/')
        }

    }

    return (
        <Flex maxW="container.full" h='100vh' alignItems='center' justify='center'>
            <Flex w='500px'
                direction='column'
                alignItems='center'
                justify='center'
                borderWidth={isLargerThan300 ? 'none' : '1px'}
                borderStyle='solid'
                py={{ base: 10 }}
                borderRadius='lg'
                gap={4}
                borderColor={useColorModeValue('gray.300', 'gray.900')}>
                <Image src="logo.png"
                    boxSize='150px'
                    borderRadius='full'
                />
                <Flex direction='column' minW='md' gap={2}>
                    <label htmlFor="email" style={{
                        fontSize: '18px'
                    }}>
                        E-mail
                    </label>
                    <Input
                        variant='filled'
                        placeholder="E-mail ..."
                        size='lg'
                        {...register('email', { required: true, validate: (value) => isEmail(value) })}
                    />
                    {
                        errors?.email?.type === 'required' &&
                        <span style={{
                            color: 'red'
                        }}>E-mail necessário</span>
                    }
                    {
                        errors?.email?.type === 'validate' &&
                        <span style={{
                            color: 'red'
                        }}>E-mail invalído</span>
                    }
                </Flex>
                <Flex direction='column' minW='md' gap={2}>
                    <label htmlFor="password" style={{
                        fontSize: '18px'
                    }}>
                        Senha
                    </label>
                    <InputGroup>
                        <Input
                            variant='filled'
                            placeholder="*******"
                            size='lg'
                            type={show ? 'text' : 'password'}
                            {...register('password', { required: true })}
                        />
                        <InputRightElement width='4rem' height={'3rem'}>
                            <MdVisibility
                                style={{
                                    width: 30,
                                    height: 30,
                                    cursor: 'pointer'
                                }}
                                onClick={() => setShow(!show)}
                            />
                        </InputRightElement>
                        {
                            errors?.password?.type === 'required' &&
                            <span style={{
                                color: 'red'
                            }}>Senha necessária</span>
                        }
                    </InputGroup>
                </Flex>
                <Flex gap={2} minW='md'>
                    <Button isLoading={isLoading} size='lg' minW='full' colorScheme='blue' onClick={() => handleSubmit(handleLogin)()}>Entrar</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Login