'use client'

import {
    Flex,
    Input,
    useColorModeValue,
    Image,
    Button,
    useMediaQuery
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import isEmail from "validator/lib/isEmail"

const Login = () => {

    const [isLargerThan300] = useMediaQuery('(max-width: 700px)')
    const { register, handleSubmit, formState: { errors } } = useForm()


    const handleLogin = async (data) => {
        console.log(data)
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
                    <Input
                        variant='filled'
                        placeholder="*******"
                        size='lg'
                        type="password"
                        {...register('password', { required: true })}
                    />
                    {
                        errors?.password?.type === 'required' &&
                        <span style={{
                            color: 'red'
                        }}>Senha necessária</span>
                    }
                </Flex>
                <Flex gap={2} minW='md'>
                    <Button size='lg' minW='full' colorScheme='blue' onClick={() => handleSubmit(handleLogin)()}>Entrar</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Login