import { Container, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../data/projects";
import classes from "./Projects.module.css";

export default function Projects() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Text className="section-label">projects</Text>
          <Title order={1} className="page-title" mt="xs">
            My Work
          </Title>
          <Text className={classes.subtitle} mt="xs">
            A selection of things I've built — scientific tools, web apps, and
            experiments at the intersection of chemistry and code.
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
