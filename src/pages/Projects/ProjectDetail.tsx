import {
  ActionIcon,
  Badge,
  Button,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  IconArrowLeft,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";
import { projects } from "../../data/projects";
import classes from "./ProjectDetail.module.css";

const statusColors: Record<string, string> = {
  live: "phosphor",
  wip: "amber",
  archived: "gray",
};

const statusLabels: Record<string, string> = {
  live: "LIVE",
  wip: "WIP",
  archived: "ARCHIVED",
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Container size="md" py="xl">
        <Text className={classes.notFound}>{"// 404 — project not found"}</Text>
        <Button
          component={Link}
          to="/projects"
          variant="outline"
          color="phosphor"
          radius={0}
          mt="md"
          leftSection={<IconArrowLeft size={14} />}
        >
          Back to projects
        </Button>
      </Container>
    );
  }

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        {/* Back nav */}
        <div>
          <ActionIcon
            variant="subtle"
            color="phosphor"
            radius={0}
            onClick={() => navigate("/projects")}
            aria-label="Back to projects"
          >
            <IconArrowLeft size={16} />
          </ActionIcon>
        </div>

        {/* Header */}
        <div>
          <Text className={classes.sectionLabel}>{"// project"}</Text>
          <Group align="center" gap="md" mt="xs" wrap="wrap">
            <Title order={1} className={classes.pageTitle}>
              {project.title}
            </Title>
            <Badge
              variant="outline"
              color={statusColors[project.status]}
              radius={0}
              className={classes.statusBadge}
            >
              {statusLabels[project.status]}
            </Badge>
            {project.date && (
              <Text className={classes.date}>{project.date}</Text>
            )}
          </Group>
        </div>

        <Divider color="phosphor" opacity={0.3} />

        {/* Description */}
        <div>
          <Text className={classes.sectionLabel} mb="md">
            {"// description"}
          </Text>
          {project.longDescription.split("\n\n").map((para, i) => (
            <Text key={i} className={classes.bodyText} mb="md">
              {para}
            </Text>
          ))}
        </div>

        {/* Tags */}
        <div>
          <Text className={classes.sectionLabel} mb="md">
            {"// stack"}
          </Text>
          <Group gap="xs">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                color="phosphor"
                radius={0}
                className={classes.tag}
                classNames={{ label: classes.tagLabel }}
              >
                {tag}
              </Badge>
            ))}
          </Group>
        </div>

        {/* Links */}
        {(project.githubUrl || project.liveUrl) && (
          <div>
            <Text className={classes.sectionLabel} mb="md">
              {"// links"}
            </Text>
            <Group gap="md">
              {project.githubUrl && (
                <Button
                  component="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  color="phosphor"
                  radius={0}
                  leftSection={<IconBrandGithub size={16} />}
                  className={classes.linkButton}
                >
                  GitHub
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  component="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  color="amber"
                  radius={0}
                  leftSection={<IconExternalLink size={16} />}
                  className={classes.linkButton}
                >
                  Live Site
                </Button>
              )}
            </Group>
          </div>
        )}

        <Divider color="phosphor" opacity={0.3} />

        <Button
          component={Link}
          to="/projects"
          variant="subtle"
          color="phosphor"
          radius={0}
          leftSection={<IconArrowLeft size={14} />}
          className={classes.backButton}
        >
          All projects
        </Button>
      </Stack>
    </Container>
  );
}
