import { Container, Title, Text, Paper, Center, Stack } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Container>
        <Title order={1} mt="md">
          Home{" "}
        </Title>
        <Text> This is the home page</Text>
        <Center>
          <Stack>
            <Paper shadow="xs" p="md" withBorder radius={"md"}>
              <Text>This is some text</Text>
            </Paper>
          </Stack>
        </Center>
      </Container>
    </>
  );
}
