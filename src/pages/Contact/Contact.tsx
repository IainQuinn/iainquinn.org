import {
  Button,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
import classes from "./Contact.module.css";

export default function Contact() {
  return (
    <Container size="sm" py="xl">
      <Stack gap="xl">
        <div>
          <Text className={classes.sectionLabel}>{"// contact"}</Text>
          <Title order={1} className={classes.pageTitle} mt="xs">
            Get in touch
          </Title>
          <Text className={classes.subtitle} mt="xs">
            Whether you're hiring, have a project in mind, or just want to talk
            chemistry and code — I'm all ears.
          </Text>
        </div>

        <Divider color="phosphor" opacity={0.3} />

        <div className={classes.terminal}>
          <Text className={classes.terminalPrompt}>
            {"$ cat contact_info.txt"}
          </Text>
          <Text className={classes.terminalOutput} mt="md">
            {"> Iain Quinn"}
          </Text>
          <Text className={classes.terminalOutput}>
            {
              "> Full Stack Developer · Computational Chemist · Cheminformatician"
            }
          </Text>
          <Text className={classes.terminalOutput} mt="md">
            {"> Currently: Chemify"}
          </Text>
          <Text className={classes.terminalOutput}>
            {
              "> Open to: cheminformatics, scientific web apps, full stack, freelance"
            }
          </Text>
        </div>

        <div>
          <Text className={classes.sectionLabel} mb="md">
            {"// reach_me_at"}
          </Text>
          <Group gap="md" wrap="wrap">
            <Button
              component="a"
              href="https://github.com/IainQuinn"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              color="phosphor"
              radius={0}
              size="md"
              leftSection={<IconBrandGithub size={18} />}
              className={classes.linkButton}
            >
              GitHub
            </Button>
            <Button
              component="a"
              href="https://www.linkedin.com/in/iain-quinn-/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              color="amber"
              radius={0}
              size="md"
              leftSection={<IconBrandLinkedin size={18} />}
              className={classes.linkButton}
            >
              LinkedIn
            </Button>
            <Button
              component="a"
              href="https://www.youtube.com/@iainquinn"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              color="red"
              radius={0}
              size="md"
              leftSection={<IconBrandYoutube size={18} />}
              className={classes.linkButton}
            >
              YouTube
            </Button>
          </Group>
          <Text className={classes.note} mt="md">
            {"// More contact options coming soon."}
          </Text>
        </div>
      </Stack>
    </Container>
  );
}
