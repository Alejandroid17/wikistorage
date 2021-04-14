import { mode } from "@chakra-ui/theme-tools"

const BaseFooter = {
  baseStyle: (props) => ({
    borderTop: "1px solid",
    borderTopColor: mode("gray.300", "gray.700")(props),
    bottom: 0,
    height: "3.3rem",
    position: "relative",
    width: "full",
    zIndex: 999,
    bg: mode("white", "gray.800")(props),
  }),
}

export default BaseFooter
