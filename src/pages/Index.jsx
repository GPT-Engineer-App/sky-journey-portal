import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, NumberInput, NumberInputField, Select, Stack, Text } from "@chakra-ui/react";
import { FaPlaneDeparture, FaCalendarAlt, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <Heading as="h1" size="2xl" mb={6}>
          SkyHigh Airlines
        </Heading>
        <Box p={8} borderWidth={1} borderRadius="lg">
          <Stack spacing={4}>
            <FormControl id="from">
              <FormLabel>From</FormLabel>
              <Select placeholder="Select departure city">
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
                <option>Miami</option>
              </Select>
            </FormControl>
            <FormControl id="to">
              <FormLabel>To</FormLabel>
              <Select placeholder="Select destination city">
                <option>London</option>
                <option>Paris</option>
                <option>Tokyo</option>
                <option>Sydney</option>
              </Select>
            </FormControl>
            <FormControl id="date">
              <FormLabel>Date</FormLabel>
              <Flex align="center">
                <FaCalendarAlt />
                <Input type="date" placeholder="Select date" ml={2} />
              </Flex>
            </FormControl>
            <FormControl id="time">
              <FormLabel>Time</FormLabel>
              <Flex align="center">
                <Input type="time" placeholder="Select time" />
              </Flex>
            </FormControl>
            <FormControl id="travelers">
              <FormLabel>Travelers</FormLabel>
              <Flex align="center">
                <FaUsers />
                <NumberInput min={1} max={10} defaultValue={1} ml={2}>
                  <NumberInputField />
                </NumberInput>
              </Flex>
            </FormControl>
            <Button leftIcon={<FaPlaneDeparture />} colorScheme="blue" size="lg">
              Book Flight
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
