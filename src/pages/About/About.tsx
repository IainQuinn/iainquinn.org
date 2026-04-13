import {
  Avatar,
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
          <Text className={classes.sectionLabel}>{"// about"}</Text>
          <Title order={1} className={classes.pageTitle} mt="xs">
            Iain Quinn
          </Title>
          <Text className={classes.subtitle} mt="xs">
            Full Stack Developer · Computational Chemist · Cheminformatician
          </Text>
        </div>

        <Divider color="phosphor" opacity={0.3} />

        {/* Bio */}
        <Group align="flex-start" gap="xl" wrap="wrap">
          <Avatar
            size={100}
            radius={0}
            color="phosphor"
            variant="outline"
            className={classes.avatar}
          >
            IQ
          </Avatar>

          <Stack gap="md" style={{ flex: 1, minWidth: 280 }}>
            <Text className={classes.bio}>
              I'm Iain Quinn — a full stack developer and computational chemist
              currently working at{" "}
              <Text component="span" c="phosphor" fw={600} inherit>
                Chemify
              </Text>
              , where I build cheminformatics tools and scientific web
              applications.
            </Text>
            <Text className={classes.bio}>
              My background spans both worlds: I hold an MSci in computational
              chemistry, where I studied the solvation behaviour of molecules in
              diethyl ether using{" "}
              <Text component="span" c="amber" fw={600} inherit>
                RISM theory
              </Text>
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

        <Divider color="phosphor" opacity={0.3} />

        {/* Skills */}
        <div>
          <Text className={classes.sectionLabel} mb="lg">
            {"// skills"}
          </Text>
          <SkillBadges />
        </div>

        <Divider color="phosphor" opacity={0.3} />

        {/* Currently */}
        <div>
          <Text className={classes.sectionLabel} mb="md">
            {"// currently"}
          </Text>
          <Stack gap="xs">
            <Text className={classes.currentItem}>
              <Text component="span" c="phosphor" inherit>
                →
              </Text>{" "}
              Building cheminformatics tooling at Chemify
            </Text>
            <Text className={classes.currentItem}>
              <Text component="span" c="phosphor" inherit>
                →
              </Text>{" "}
              Exploring RISM-based solvation models
            </Text>
            <Text className={classes.currentItem}>
              <Text component="span" c="phosphor" inherit>
                →
              </Text>{" "}
              Building this site (meta, but true)
            </Text>
          </Stack>
        </div>
      </Stack>
    </Container>
  );
}
