import { Box } from "@chakra-ui/react"
import Home from "./Page/Home"


function App() {

  return (
    <Box className="h-fit p-10">
      <Box className="container w-[70vw] h-fit mx-auto border-[1px] border-[#ccc] rounded-md px-5 py-5"  >
        <Home />
      </Box>
    </Box>
  )
}

export default App
