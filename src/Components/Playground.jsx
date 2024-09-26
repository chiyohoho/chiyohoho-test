import { Box, Center, Flex, useColorMode } from '@chakra-ui/react'
import { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

const Playground = ({ number, isStart, setIsStart, setIsWin, reset, setCurrentIndex, currentIndex }) => {
    const { colorMode } = useColorMode()
    const fakeArray = new Array(number).fill(null)

    const generateRandomPosition = () => {
        const randomX = Math.random() * 96
        const randomY = Math.random() * 93
        return {
            position: "absolute",
            top: `${randomY}%`,
            left: `${randomX}%`,
        }
    }

    const positions = useMemo(() => fakeArray.map(() => generateRandomPosition()), [number])

    const clearNumber = (index) => {
        if (index === currentIndex) {
            setCurrentIndex(prev => prev + 1)
        } else {
            setIsWin(3)
            setIsStart(false)
            reset()
            setCurrentIndex(0)
        }
    }

    useEffect(() => {
        if (currentIndex === number && isStart) {
            setIsWin(2)
            setIsStart(false)
            reset()
            setCurrentIndex(0)
        }
    }, [currentIndex, isStart, number, setIsWin, setIsStart, reset, setCurrentIndex])

    return (
        <Box className="h-[500px] w-[100%] relative overflow-hidden" border="1px solid #ccc" rounded={5}>
            {isStart ? (
                fakeArray.map((_, index) => {
                    const zIndex = number - index
                    return (
                        <motion.div
                            onClick={() => clearNumber(index)}
                            key={index}
                            style={{ zIndex, ...positions[index] }}
                            initial={{ backgroundColor: (colorMode === 'dark' ? 'black' : 'white'), opacity: 1 }}
                            whileTap={{ backgroundColor: 'red' }}
                            animate={{
                                opacity: index < currentIndex ? 0 : 1,
                                backgroundColor: index < currentIndex ? 'red' : (colorMode === 'dark' ? 'black' : 'white')
                            }}
                            transition={{ duration: 0.5 }}
                            className="absolute h-10 w-10 rounded-full cursor-pointer items-center justify-center border-2 border-gray-500"
                        >
                            <Center className='w-full h-full'>
                                {index + 1}
                            </Center>
                        </motion.div>
                    )
                })
            ) : (
                <Center className="text-[20px] w-full h-full">
                    Enter a random number and click start
                </Center>
            )}
        </Box>
    )
}

export default Playground
