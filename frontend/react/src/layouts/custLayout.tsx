import { Flex, Box } from "@chakra-ui/react"
import Sidebar from "../components/navbar"
import { Outlet } from "react-router-dom";

export default function CustLayout() {
    return (
        <Flex bg="gray.100" minH={"100vh"} minW={"100%"} overflow={"hidden"}>
      <Sidebar />

      {/* Main content area */}
      <Box
        flex="1"
        ml={{ base: "80px", md: "250px" }} // matches sidebar width
        transition="margin-left 0.3s ease"
        p="6"
        bg="gray.100"
        overflowY="auto"
        h={"100%"}
        w={"100%"}
      >
        <Outlet />
      </Box>
    </Flex>
  );
}
