import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react"

const BaseDrawer = ({ isOpen, header, children, onClose }) => {
  return (
    <Drawer
      placement={"left"}
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">{header}</DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default BaseDrawer
