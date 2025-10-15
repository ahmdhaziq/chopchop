import { Flex, Box } from "@chakra-ui/react"
import Sidebar from "../components/navbar"

export default function CustLayout({ children }: { children: React.ReactNode }) {
    return (
        <Flex>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <Box
        flex="1"
        ml={{ base: "80px", md: "250px" }} // space for sidebar
        transition="margin-left 0.3s ease"
        p="6"
      >
        {children}
      </Box>
    </Flex>
  );
}
