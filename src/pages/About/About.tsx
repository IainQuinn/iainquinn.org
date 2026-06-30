import {
  Anchor,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { SkillBadges } from "../../components/SkillBadges/SkillBadges";
import classes from "./About.module.css";

export default function About() {
  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        {/* Header */}
        <div>
          <Text className="section-label">// about</Text>
          <Title order={1} className="page-title" mt="xs">
            Iain Quinn
          </Title>
          <Text className={classes.subtitle} mt="xs">
            Scientific Software Engineer
          </Text>
        </div>

        <Divider />

        {/* Bio */}
        <Group align="flex-start" gap="xl" wrap="wrap">
          <Stack gap="md" style={{ flex: 1, minWidth: 280 }}>
            <Text className={classes.bio}>
              I'm Iain Quinn — a full stack scientific software engineer
              currently working at{" "}
              <Text component="span" fw={600} inherit>
                Chemify
              </Text>
              , where I build cheminformatics tools and scientific web
              applications.
            </Text>
            <Text className={classes.bio}>
              I hold an MSci in computational chemistry, where I studied the
              solvation behaviour of molecules in{" "}
              <Anchor
                href="/thesis.pdf"
                target="_blank"
                rel="noopener noreferrer"
                fw={600}
                underline="always"
                inherit
              >
                diethyl ether using RISM theory
              </Anchor>
              . Today I write Python and TypeScript for production, work with
              molecular data pipelines, and build the kind of software that
              makes chemistry researchers' lives measurably better.
            </Text>
            <Text className={classes.bio}>
              I'm equally at home debugging a React component, optimising a
              cheminformatics pipeline, or deriving a molecular property from
              first principles. That crossover is rare — and it's what I enjoy
              most about the work.
            </Text>
          </Stack>
        </Group>

        <Divider />

        {/* Skills */}
        <div>
          <Text className="section-label" mb="lg">
            // skills
          </Text>
          <SkillBadges />
        </div>

        <Divider />

        {/* Currently */}
        <div>
          <Text className="section-label" mb="md">
            // currently
          </Text>
          <Stack gap="xs">
            <Text className={classes.currentItem}>
              → Building cheminformatics tooling at Chemify
            </Text>
          </Stack>
        </div>
      </Stack>
    </Container>
  );
}
