import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Flex,
    Text,
} from '@chakra-ui/react'

const RulesModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button colorScheme='facebook' w={'120px'} variant={'outline'} onClick={onOpen}>
                How to play ?
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>How to play ?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex className='flex-col gap-2'>
                            <Text className='border-2 border-gray-300 p-2'>
                                1. Enter any number and press Start to begin the timer.
                            </Text>

                            <Text className='border-2 border-gray-300 p-2'>
                                2. Your task is to find and press the numbered buttons in ascending order.
                            </Text>

                            <Text className='border-2 border-gray-300 p-2'>
                                3. The smallest number is always 1, and the largest number is the one you entered at the start.
                            </Text>

                            <Text className='border-2 border-gray-300 p-2'>
                                4. You must follow the sequence: if you press 1 first, the next number must be 2 (previous number + 1).
                            </Text>

                            <Text className='border-2 border-gray-300 p-2'>
                                5. The game ends after you press the final number, and the timer stops.
                            </Text>

                            <Text className='border-2 border-gray-300 p-2'>
                                6. You lose if you press a number out of order, so be careful!
                            </Text>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant={'outline'} colorScheme='black' mr={3} onClick={onClose}>
                            Got it
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default RulesModal