import { Container, Title, Text } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Container>
        <Title order={1} mt="md">
          Home{" "}
        </Title>
        <Text> This is the home page</Text>
      </Container>
    </>
  );
}
