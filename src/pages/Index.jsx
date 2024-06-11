import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        <Box as="header" bg="blue.700" color="white" py={4}>
          <Container maxW="container.xl">
            <Heading as="h1" size="lg">Events Management</Heading>
          </Container>
        </Box>
        <Box as="main" flex="1" py={8}>
          <Container maxW="container.md">
            <VStack spacing={4}>
              <Heading as="h2" size="md">Upcoming Events</Heading>
              <Text>Here is a list of upcoming events.</Text>
              {/* Placeholder for events list */}
              <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
                <Text>No events available.</Text>
              </Box>
            </VStack>
          </Container>
        </Box>
        <Box as="footer" bg="blue.700" color="white" py={4}>
          <Container maxW="container.xl">
            <Text>&copy; {new Date().getFullYear()} Events Management. All rights reserved.</Text>
          </Container>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;