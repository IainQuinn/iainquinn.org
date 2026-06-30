import { Badge, Card, Group, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconArrowUpRight } from "@tabler/icons-react";
import { categoryLabels, type Project } from "../../data/projects";
import classes from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      component={Link}
      to={`/projects/${project.id}`}
      className={classes.card}
      padding="lg"
    >
      <Stack gap="sm" h="100%">
        <Group justify="space-between" align="center" wrap="nowrap">
          <Badge variant="outline" size="xs" className={classes.categoryBadge}>
            {categoryLabels[project.category]}
          </Badge>
          <IconArrowUpRight size={16} stroke={1.5} className={classes.arrow} />
        </Group>

        <Text className={classes.title}>{project.title}</Text>

        <Text className={classes.description} style={{ flex: 1 }}>
          {project.description}
        </Text>

        <Group gap="xs">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="dot"
              size="sm"
              className={classes.tag}
              classNames={{ label: classes.tagLabel }}
            >
              {tag}
            </Badge>
          ))}
        </Group>

        {project.date && (
          <Text className={classes.date}>{project.date}</Text>
        )}
      </Stack>
    </Card>
  );
}
