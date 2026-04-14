import { Badge, Card, Group, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import type { Project } from "../../data/projects";
import classes from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

const statusColors: Record<Project["status"], string> = {
  live: "phosphor",
  wip: "amber",
  archived: "gray",
};

const statusLabels: Record<Project["status"], string> = {
  live: "LIVE",
  wip: "WIP",
  archived: "ARCHIVED",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      component={Link}
      to={`/projects/${project.id}`}
      className={classes.card}
      padding="lg"
      radius={0}
    >
      <Stack gap="sm" style={{ height: "100%" }}>
        <Group justify="space-between" align="flex-start">
          <Text className={classes.title}>{project.title}</Text>
          <Badge
            variant="outline"
            color={statusColors[project.status]}
            radius={0}
            size="xs"
            className={classes.statusBadge}
          >
            {statusLabels[project.status]}
          </Badge>
        </Group>

        <Text className={classes.description} style={{ flex: 1 }}>
          {project.description}
        </Text>

        <Group gap="xs" mt="auto">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="dot"
              color="phosphor"
              radius={0}
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
