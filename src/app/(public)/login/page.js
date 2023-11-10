'use client'

import {
    Flex,
    Input,
    useColorModeValue,
    Image,
    Button,
    useMediaQuery,
    InputGroup,
    InputRightElement,
    Center
} from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import isEmail from "validator/lib/isEmail"
import { useUserProvider } from "@/Context/UserProvider"
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
        <Center minH={'100vh'}>
            <Flex minW={400}
                h={450}
                direction='column'
                alignItems='center'
                justify='center'
                borderWidth={isLargerThan300 ? 'none' : '1px'}
                borderStyle='solid'
                borderRadius='lg'
                borderColor={useColorModeValue('gray.300', 'gray.900')}>
                <Image src="logo.png"
                    boxSize='120px'
                    borderRadius='full'
                />
                <Flex direction={'column'} minW={350} gap={3}>
                    <Flex direction='column' gap={2}>
                        <label htmlFor="email">
                            E-mail
                        </label>
                        <Input
                            variant='filled'
                            placeholder="E-mail ..."
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
                    <Flex direction='column' gap={2}>
                        <label htmlFor="password">
                            Senha
                        </label>
                        <InputGroup>
                            <Input
                                variant='filled'
                                placeholder="*******"
                                type={show ? 'text' : 'password'}
                                {...register('password', { required: true })}
                            />
                            <InputRightElement width='4rem' height={'2.5rem'}>
                                <MdVisibility
                                    style={{
                                        width: 25,
                                        height: 25,
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
                    <Button isLoading={isLoading} colorScheme='blue' onClick={() => handleSubmit(handleLogin)()}>Entrar</Button>
                </Flex>
            </Flex>
        </Center>
    )
}

export default Login