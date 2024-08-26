import { Box, Center, Flex } from '@chakra-ui/react'
import { useEffect, useMemo } from 'react'

const Playground = ({ number, isStart, setIsStart, setIsWin, reset, setCurrentIndex, currentIndex }) => {
    const fakeArray = new Array(number).fill(null)

    const generateRandomPosition = () => {
        const randomX = Math.random() * 96.5
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
        <Box className="h-[500px] w-[100%] relative overflow-hidden" border="1px solid black">
            {isStart ?
                fakeArray.map((_, index) => {
                    const zIndex = number - index
                    return (
                        <Flex
                            onClick={() => clearNumber(index)}
                            key={index}
                            zIndex={zIndex}
                            className="absolute min-w-10 min-h-10 rounded-full cursor-pointer items-center justify-center"
                            style={positions[index]}
                            border="2px solid black"
                            bg='white'
                            visibility={index < currentIndex ? 'hidden' : 'visible'}
                        >
                            {index + 1}
                        </Flex>
                    )
                })
                :
                <Center className='text-[20px] w-full h-full'>Enter a random number and click start</Center>
            }
        </Box>
    )
}

export default Playground
