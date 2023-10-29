import {
  FormLabel,
  Input,
  Box,
  Button,
  VStack,
  Text,
  Link,
  Stack,
  HStack,
  Avatar,
  Heading,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import "./App.css";

const ShadowBox = (props) => <Box rounded="base" shadow="md" {...props} />;
const sampleText = ["dog", "cat", "rabbit", "mouse"];
const CommentItem = () => {
  return (
    <HStack>
      <Avatar />
      <Stack>
        {" "}
        {/* <VStack align="start"> でもOK*/}
        <Heading size="sm">Some member</Heading>
        <Box>
          あのイーハトーヴォのすきとほった風、夏でも底に冷たさをもつ青いそら、
          <br />
          うつくしい森で飾られたモーリオ市、郊外のぎらぎらひかる草の波
        </Box>
      </Stack>
    </HStack>
  );
};

function App() {
  return (
    <VStack>
      <Box padding={3} backgroundColor="red">
        <Text fontSize="4xl" _hover={{ fontWeight: "bold" }}>
          Hello
        </Text>
      </Box>
      <Box>
        <FormLabel htmlFor="email">Email Address</FormLabel>
        <Input id="email" type="email" />
      </Box>
      <Box>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" type="password" />
      </Box>
      <Button>登録</Button>
      <Link href="https://google.com">
        <Button colorScheme="teal">default button</Button>
      </Link>
      <Button
        colorScheme="teal"
        variant="outline"
        as="a"
        href="https://google.com"
      >
        as=a button
      </Button>
      <ShadowBox p={4}>hello</ShadowBox>
      <Box breakInside="avoid">xxx</Box>
      <Box sx={{ breakInside: "avoid" }}>xxx</Box>
      <Box>
        {sampleText.map((item) => (
          <Box bg="red.50" p={2}>
            {item}
          </Box>
        ))}
      </Box>
      <Stack>
        {sampleText.map((item) => (
          <Box bg="blue.50" p={2}>
            {item}
          </Box>
        ))}
      </Stack>
      <CommentItem />
      <Flex justifyContent="space-between">
        <Flex>
          <Box color="gray.500" px={1}>
            @taro:
          </Box>
          <Box fontWeight="bold">Hello!</Box>
        </Flex>
        <Flex>
          <Box color="gray.500">2021-05-01 12:00</Box>
        </Flex>
      </Flex>

      <Flex>
        <Box color="gray.500" px={1}>
          @taro:
        </Box>
        <Box fontWeight="bold">Hello!</Box>
        <Spacer />
        <Box color="gray.500">2021-05-01 12:00</Box>
      </Flex>
    </VStack>
  );
}

export default App;
