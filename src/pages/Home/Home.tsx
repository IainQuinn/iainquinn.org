import {
  Anchor,
  Button,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";

export default function Home() {
  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        {/* Header */}
        <div>
          <Text className="section-label">// home</Text>
          <Title order={1} className="page-title" mt="xs">
            Iain Quinn
          </Title>
          <Text className={classes.subtitle} mt="xs">
            Scientific Software Engineer
          </Text>
        </div>

        <Divider />

        {/* Bio */}
        <Stack gap="md">
          <Text className={classes.bio}>
            I'm a full stack scientific software engineer at{" "}
            <Anchor
              href="https://chemify.io"
              target="_blank"
              rel="noopener noreferrer"
              fw={600}
              underline="always"
              inherit
            >
              Chemify
            </Anchor>
            , where I build cheminformatics tools and scientific web
            applications.
          </Text>
          <Text className={classes.bio}>
            I hold an MSci in computational chemistry, where I modelled the
            solvation of molecules in{" "}
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
            . These days I work mostly in Python and TypeScript, building
            production software and data pipelines for chemistry research.
          </Text>
          <Text className={classes.bio}>
            I like working across the boundary between chemistry and software —
            a single project might involve a React interface, a data pipeline,
            and the science underneath.
          </Text>
        </Stack>

        {/* CTAs */}
        <Group gap="md">
          <Button
            component={Link}
            to="/projects"
            variant="filled"
            size="md"
            className={`${classes.control} ${classes.primary}`}
          >
            View my work
          </Button>
          <Button
            component={Link}
            to="/contact"
            variant="default"
            size="md"
            className={classes.control}
          >
            Contact
          </Button>
        </Group>

        {/* <Divider /> */}

        {/* Currently
        <div>
          <Text className="section-label" mb="md">
            // currently
          </Text>
          <Stack gap="xs">
            <Text className={classes.currentItem}>
              → Building cheminformatics tooling at Chemify
            </Text>
          </Stack>
        </div> */}
      </Stack>
    </Container>
  );
}
