import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconCode,
} from "@tabler/icons-react";
import { ActionIcon, Container, Group, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const navLinks = [
  { label: "About", link: "/about" },
  { label: "Projects", link: "/projects" },
  { label: "writing", link: "/writing" },
  { label: "Contact", link: "/contact" },
];

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container size="xl" className={classes.inner}>
        <div className={classes.logo}>
          <Group gap={8} align="center">
            <IconCode size={24} color="var(--mantine-color-phosphor-5)" />
            <Title order={4} className={classes.logoText}>
              iainquinn.org
            </Title>
          </Group>
          <Text size="xs" c="dimmed" className={classes.description} mt={4}>
            Full Stack Developer Computational Chemist Cheminformatician
          </Text>
        </div>

        <div className={classes.groups}>
          <div className={classes.wrapper}>
            <Text className={classes.groupTitle}>{"// navigate"}</Text>
            {navLinks.map((link) => (
              <Text<typeof Link>
                key={link.label}
                className={classes.link}
                component={Link}
                to={link.link}
              >
                {link.label}
              </Text>
            ))}
          </div>

          <div className={classes.wrapper}>
            <Text className={classes.groupTitle}>{"// connect"}</Text>
            <Text<"a">
              className={classes.link}
              component="a"
              href="https://github.com/IainQuinn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Text>
            <Text<"a">
              className={classes.link}
              component="a"
              href="https://www.linkedin.com/in/iain-quinn-/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Text>
            <Text<"a">
              className={classes.link}
              component="a"
              href="https://www.youtube.com/@iainquinn"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </Text>
          </div>
        </div>
      </Container>

      <Container size="xl" className={classes.afterFooter}>
        <Text c="dimmed" size="sm" ff='"JetBrains Mono", monospace'>
          © 2026 Iain Quinn. All rights reserved.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://github.com/IainQuinn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://www.linkedin.com/in/iain-quinn-/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://www.youtube.com/@iainquinn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
