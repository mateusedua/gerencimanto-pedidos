'use client'

import {
    Button,
    Flex,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select
} from "@chakra-ui/react"
import { useForm } from 'react-hook-form'
import maskMoney from "@/utils/maskMoney"
import maskNumber from "@/utils/maskNumber"

const cadastroProduto = (isOpen, onClose) => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm()

    const handleCadastrar = async (data) => {
        console.log(data)
    }

    const handleCancelar = () => {
        reset({
            nome: '',
            unidade: 'kg',
            quantidade: '',
            preco: ''
        })
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader fontSize={'2xl'}>Cadastro Produto</ModalHeader>
                <ModalCloseButton />
                <ModalBody display={'flex'}
                    flexDirection={'column'}
                    gap={5}
                >
                    <Flex gap={5} fontSize={'md'}>
                        <Flex w={'80%'} direction={'column'} gap={2}>
                            <label htmlFor="nome" style={{
                                fontWeight: 600
                            }}>Nome</label>
                            <Input placeholder="Nome ..."
                                id="nome"
                                variant="filled"
                                fontSize={'md'}
                                size={'md'}
                                {...register('nome', {
                                    required: true
                                })}
                            />
                            {
                                errors.nome?.type === 'required' &&
                                <span style={{
                                    color: 'red'
                                }}>Nome necessário</span>
                            }
                        </Flex>
                        <Flex direction={'column'} gap={2}>
                            <label htmlFor="unidade" style={{
                                fontWeight: 600
                            }}>Unidade</label>
                            <Select id="unidade"
                                fontSize={'md'}
                                size={'md'}
                                {...register('unidade', {
                                    required: true
                                })}
                            >
                                <option value={'kg'}>KG</option>
                                <option value={'un'}>UN</option>
                            </Select>
                        </Flex>
                    </Flex>
                    <Flex gap={5} fontSize={'md'}>
                        <Flex direction={'column'} gap={2} w={'50%'}>
                            <label htmlFor="quantidade" style={{
                                fontWeight: 600
                            }}>Quantidade</label>
                            <Input placeholder="Quantidade ..."
                                id="quantidade"
                                fontSize={'md'}
                                size={'md'}
                                variant={'filled'}
                                {...register('quantidade', {
                                    required: true,
                                    onChange: (e) => {
                                        const { value } = e.target
                                        e.target.value = maskNumber(value)
                                    }
                                })}
                            />
                            {
                                errors.quantidade?.type === 'required' &&
                                <span style={{
                                    color: 'red'
                                }}>Quantidade necessária</span>
                            }
                        </Flex>
                        <Flex direction={'column'} gap={2} w={'50%'}>
                            <label htmlFor="preco" style={{
                                fontWeight: 600
                            }}>Preço</label>
                            <Input placeholder="Preço ..."
                                id="preco"
                                fontSize={'md'}
                                size={'md'}
                                variant={'filled'}
                                {...register('preco', {
                                    required: true,
                                    onChange: (e) => {
                                        const { value } = e.target
                                        e.target.value = maskMoney(value)
                                    }
                                })}
                            />
                            {
                                errors.preco?.type === 'required' &&
                                <span style={{
                                    color: 'red'
                                }}>Preço necessário</span>
                            }
                        </Flex>
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <Flex gap={5}>
                        <Button colorScheme="red"
                            size={'md'}
                            onClick={handleCancelar}
                        >Cancelar</Button>
                        <Button colorScheme="green"
                            size={'md'}
                            onClick={() => handleSubmit(handleCadastrar)()}
                        >Cadastrar</Button>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default cadastroProduto