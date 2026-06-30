import { Button, Container, Divider, Group, Stack, Text, Title } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <Container size="sm" py="xl">
      <Stack gap="xl">
        <div>
          <Text className="section-label">contact</Text>
          <Title order={1} className="page-title" mt="xs">
            Get in touch
          </Title>
          <Text c="dimmed" size="sm" mt="xs">
            Whether you're hiring, have a project in mind, or just want to talk
            chemistry and code — I'm all ears.
          </Text>
        </div>

        <Divider />

        <Stack gap="xs">
          <Text size="sm">Iain Quinn</Text>
          <Text c="dimmed" size="sm">
            Full Stack Developer · Computational Chemist · Cheminformatician
          </Text>
          <Text c="dimmed" size="sm" mt="md">
            Currently at Chemify · open to cheminformatics, scientific web apps,
            full stack, and freelance work.
          </Text>
        </Stack>

        <div>
          <Text className="section-label" mb="md">
            reach me at
          </Text>
          <Group gap="md" wrap="wrap">
            <Button
              component="a"
              href="https://github.com/IainQuinn"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
              leftSection={<IconBrandGithub size={18} />}
            >
              GitHub
            </Button>
            <Button
              component="a"
              href="https://www.linkedin.com/in/iain-quinn-/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
              leftSection={<IconBrandLinkedin size={18} />}
            >
              LinkedIn
            </Button>
            <Button
              component="a"
              href="https://www.youtube.com/@iainquinn"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
              leftSection={<IconBrandYoutube size={18} />}
            >
              YouTube
            </Button>
          </Group>
        </div>
      </Stack>
    </Container>
  );
}
