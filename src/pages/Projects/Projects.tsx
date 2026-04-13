import { Container, Divider, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../data/projects";
import classes from "./Projects.module.css";

export default function Projects() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Text className={classes.sectionLabel}>{"// projects"}</Text>
          <Title order={1} className={classes.pageTitle} mt="xs">
            My Work
          </Title>
          <Text className={classes.subtitle} mt="xs">
            A selection of things I've built — scientific tools, web apps, and
            experiments at the intersection of chemistry and code.
          </Text>
        </div>

        <Divider color="phosphor" opacity={0.3} />

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
