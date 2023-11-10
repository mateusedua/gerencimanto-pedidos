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


const cadastroProduto = (isOpen, onClose) => {

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
                    <Flex gap={5} fontSize={'xl'}>
                        <Flex w={'90%'} direction={'column'} gap={2}>
                            <label htmlFor="nome" style={{
                                fontWeight: 600
                            }}>Nome</label>
                            <Input placeholder="Nome ..." id="nome" variant="filled" fontSize={'xl'} size={'lg'} />
                        </Flex>
                        <Flex direction={'column'} gap={2}>
                            <label htmlFor="unidade" style={{
                                fontWeight: 600
                            }}>Unidade</label>
                            <Select id="unidade" fontSize={'xl'} size={'lg'}>
                                <option value={'kg'}>KG</option>
                                <option value={'un'}>UN</option>
                            </Select>
                        </Flex>
                    </Flex>
                    <Flex gap={5} fontSize={'xl'}>
                        <Flex direction={'column'} gap={2} w={'50%'}>
                            <label htmlFor="quantidade" style={{
                                fontWeight: 600
                            }}>Quantidade</label>
                            <Input placeholder="Quantidade ..." id="quantidade" fontSize={'xl'} size={'lg'} variant={'filled'} />
                        </Flex>
                        <Flex direction={'column'} gap={2} w={'50%'}>
                            <label htmlFor="preco" style={{
                                fontWeight: 600
                            }}>Preço</label>
                            <Input placeholder="Preço ..." id="preco" fontSize={'xl'} size={'lg'} variant={'filled'} />
                        </Flex>
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <Flex gap={5}>
                        <Button colorScheme="red" size={'lg'}>Cancelar</Button>
                        <Button colorScheme="green" size={'lg'}>Cadastrar</Button>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default cadastroProduto