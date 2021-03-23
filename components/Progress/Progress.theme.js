import { mode } from "@chakra-ui/theme-tools"

const Progress = {
    baseStyle: (props) => ({
        color: mode("blue.300", 'blue.700')(props),
    })
}

export default Progress;