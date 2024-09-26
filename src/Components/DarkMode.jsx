import { Button, useColorMode } from "@chakra-ui/react"

function DarkModeButton() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Button colorScheme='facebook' w={'fit-content'} variant={'outline'} onClick={toggleColorMode}>
            {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
    )
}

export default DarkModeButton