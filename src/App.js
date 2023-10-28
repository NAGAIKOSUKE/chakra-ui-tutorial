import { FormLabel, Input, Box, Button, VStack } from "@chakra-ui/react";

function App() {
  return (
    <VStack>
      <Box>
        <FormLabel htmlFor="email">Email Address</FormLabel>
        <Input id="email" type="email" />
      </Box>
      <Box>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" type="password" />
      </Box>
      <Button>登録</Button>
    </VStack>
  );
}

export default App;
