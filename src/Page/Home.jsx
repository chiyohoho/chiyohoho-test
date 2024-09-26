import { Box, Button, ButtonGroup, Flex, FormControl, FormErrorMessage, Heading, Input } from "@chakra-ui/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import Timer from "../Components/Timer"
import Playground from "../Components/Playground"
import RulesModal from "../Components/Rules"
import DarkModeButton from "../Components/DarkMode"

const Home = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const [isStart, setIsStart] = useState(false)
    const [number, setNumber] = useState(0)
    const [isWin, setIsWin] = useState(1)
    const [timer, setTimer] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)

    const onSubmit = (data) => {
        const inputNumber = parseFloat(data.number)

        setIsStart(true)
        setNumber(inputNumber)
        setIsWin(1)
        setTimer(0)
        reset()
        setCurrentIndex(0)

    }

    return (
        <Box className="w-full h-full">
            <Flex justifyContent={'space-between'}>
                <Heading className="" mb={5}>Quick Response Game</Heading>

                <ButtonGroup>
                    <RulesModal />
                    <DarkModeButton />
                </ButtonGroup>
            </Flex>

            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.number}>
                    <Flex gap={2} alignItems={'center'}>
                        <Input
                            w={210}
                            id="number"
                            type="number"
                            placeholder="Enter a random number"
                            {...register("number", {
                                required: "Only numbers allowed",
                                min: {
                                    value: 1,
                                    message: "Min: 1"
                                },
                                max: {
                                    value: 9999,
                                    message: "Max: 9999"
                                }
                            })}
                        />

                        <Button variant={'outline'} colorScheme="facebook" type="submit">
                            {!isStart ? 'Start' : 'Restart'}
                        </Button>

                        <Timer isStart={isStart} timer={timer} setTimer={setTimer} />

                    </Flex>
                    <FormErrorMessage>
                        {errors.number && errors.number.message}
                    </FormErrorMessage>
                </FormControl>

                <Heading color={isWin == 2 ? 'green' : 'red'} visibility={isWin == 1 ? 'hidden' : 'visible'}>
                    {isWin == 2 ? 'You Win' : 'You Lose'}
                </Heading>
            </form>

            <Playground setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} reset={reset} setIsWin={setIsWin} setIsStart={setIsStart} number={number} isStart={isStart} />

        </Box>
    )
}

export default Home
