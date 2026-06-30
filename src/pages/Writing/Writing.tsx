import { Container, Divider, List, Stack, Text, Title } from "@mantine/core";

export default function Writing() {
  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <div>
          <Text className="section-label">writing</Text>
          <Title order={1} className="page-title" mt="xs">
            Writing
          </Title>
          <Text c="dimmed" size="sm" mt="xs">
            Writing about chemistry, code, and the space between. Coming soon.
          </Text>
        </div>

        <Divider />

        <div>
          <Text className="section-label" mb="md">
            upcoming topics
          </Text>
          <List spacing="xs" size="sm">
            <List.Item>RISM theory for developers</List.Item>
            <List.Item>Building cheminformatics pipelines in Python</List.Item>
            <List.Item>Molecular data viz with React + RDKit.js</List.Item>
            <List.Item>TypeScript patterns for scientific web apps</List.Item>
          </List>
        </div>
      </Stack>
    </Container>
  );
}
