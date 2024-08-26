import { Box } from "@chakra-ui/react"
import { useEffect, useRef } from "react"

const Timer = ({ isStart, timer, setTimer }) => {

    const timerRef = useRef()

    useEffect(() => {
        if (isStart) {
            timerRef.current = setInterval(() => {
                setTimer(prev => prev + 10)
            }, 100)
        }

        return () => clearInterval(timerRef.current)

    }, [isStart, setTimer])

    return (
        <>
            <Box className="font-semibold">
                Timer: {(timer / 100).toFixed(1)}s
            </Box>
        </>
    )
}

export default Timer
