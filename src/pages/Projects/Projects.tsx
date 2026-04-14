import { Container, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../data/projects";
import classes from "./Projects.module.css";

const softwareProjects = projects.filter(
  (p) => p.category === "software" || p.category === "science",
);
const hardwareProjects = projects.filter((p) => p.category === "hardware");
const researchProjects = projects.filter((p) => p.category === "research");

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

        <Text className={classes.categoryLabel}>{"// software"}</Text>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
          {softwareProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SimpleGrid>

        <Text className={classes.categoryLabel}>{"// hardware"}</Text>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
          {hardwareProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SimpleGrid>

        <Text className={classes.categoryLabel}>{"// research"}</Text>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
          {researchProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
