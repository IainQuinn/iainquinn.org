import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconCode,
} from "@tabler/icons-react";
import { ActionIcon, Container, Group, Text } from "@mantine/core";
import classes from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container size="xl" className={classes.inner}>
        <Group gap={6} align="center">
          <IconCode size={16} color="var(--mantine-color-text)" />
          <Text className={classes.logoText}>iainquinn.org</Text>
        </Group>

        <Text c="dimmed" size="xs" ff='"JetBrains Mono", monospace' className={classes.copyright}>
          © 2026 Iain Quinn
        </Text>

        <Group gap={0} justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="md"
            variant="subtle"
            color="gray"
            component="a"
            href="https://github.com/IainQuinn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <IconBrandGithub size={20} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="md"
            variant="subtle"
            color="gray"
            component="a"
            href="https://www.linkedin.com/in/iain-quinn-/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin size={20} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="md"
            variant="subtle"
            color="gray"
            component="a"
            href="https://www.youtube.com/@iainquinn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <IconBrandYoutube size={20} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
