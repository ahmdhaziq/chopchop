import { Box, Button, Text, VStack } from "@chakra-ui/react";
import Hamburger from "hamburger-react";
import React from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay (click anywhere to close) */}
      {isOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          w="100vw"
          h="100vh"
          onClick={handleClose}
          zIndex="1000"
        />
      )}
      
      {/* Sidebar */}
      <Box
        position="fixed"
        top="0"
        left="0"
        h="100vh"
        w={isOpen ? "250px" : "80px"}
        bg={isOpen ? "gray.100" : "gray.100"}
        p="4"
        boxShadow="md"
        transition="width 0.3s ease"
        zIndex="1001"
      >
        {/* Hamburger Toggle */}
        <Box
          cursor="pointer"
          _hover={{ opacity: 0.8 }}
          w="fit-content"
        >
          <Hamburger color="black" toggled={isOpen} toggle={setIsOpen} size={20} />
        </Box>

        {/* Expanded Menu */}
        {isOpen && (
          <Box mt="6" color={"red.200"}>
            <Text
              color="red.400"
              fontSize="xl"
              fontWeight="bold"
              mb="6"
              userSelect="none"
            >
              Chop Chop
            </Text>
            
            <VStack align="stretch" spacing="4">
              <Button
                _hover={{ bg: "blue.800", color: "red" }}
                color="gray.600"
                variant="ghost"
                justifyContent="flex-start"
                w="full"
              >
                Home
              </Button>
              <Button
                _hover={{ bg: "blue.800", color: "red" }}
                color="gray.600"
                variant="ghost"
                justifyContent="flex-start"
                w="100%"
              >
                Products
              </Button>
              <Button
                _hover={{ bg: "blue.800", color: "red" }}
                color="gray.600"
                variant="ghost"
                justifyContent="flex-start"
                w="100%"
              >
                About
              </Button>
            </VStack>
            
            <Text
              position="absolute"
              bottom="4"
              color="gray.400"
              fontSize="xs"
              fontWeight="light"
            >
              Powered by bla bla
            </Text>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Sidebar;