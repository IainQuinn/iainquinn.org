import { Button, Container, Stack, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <Container size="md" py="xl">
      <Stack gap="md" align="flex-start">
        <Text className="section-label">404</Text>
        <Title order={1} className="page-title">
          Page not found
        </Title>
        <Text c="dimmed" size="sm">
          The page you're looking for doesn't exist or has moved.
        </Text>
        <Button
          component={Link}
          to="/"
          variant="outline"
          mt="md"
          leftSection={<IconArrowLeft size={14} />}
        >
          Back home
        </Button>
      </Stack>
    </Container>
  );
}
