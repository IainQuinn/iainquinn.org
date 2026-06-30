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
  IconDownload,
  IconExternalLink,
  IconFileText,
} from "@tabler/icons-react";
import { projects, statusLabels } from "../../data/projects";
import classes from "./ProjectDetail.module.css";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Container size="md" py="xl">
        <Text className={classes.notFound}>404 — project not found</Text>
        <Button
          component={Link}
          to="/projects"
          variant="outline"
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
            onClick={() => navigate("/projects")}
            aria-label="Back to projects"
          >
            <IconArrowLeft size={16} />
          </ActionIcon>
        </div>

        {/* Header */}
        <div>
          <Text className="section-label">project</Text>
          <Group align="center" gap="md" mt="xs" wrap="wrap">
            <Title order={1} className="page-title">
              {project.title}
            </Title>
            <Badge
              variant="outline"
              className={classes.statusBadge}
            >
              {statusLabels[project.status]}
            </Badge>
            {project.date && (
              <Text className={classes.date}>{project.date}</Text>
            )}
          </Group>
        </div>

        <Divider />

        {/* Description */}
        <div>
          <Text className="section-label" mb="md">
            description
          </Text>
          {project.longDescription.split("\n\n").map((para, i) => (
            <Text key={i} className={classes.bodyText} mb="md">
              {para}
            </Text>
          ))}
        </div>

        {/* Document */}
        {project.pdfUrl && (
          <div>
            <Text className="section-label" mb="md">
              document
            </Text>
            <div className={classes.pdfFrame}>
              <div className={classes.pdfBar}>
                <Group gap={8} align="center" wrap="nowrap">
                  <IconFileText size={16} />
                  <Text className={classes.pdfName}>
                    {project.pdfUrl.split("/").pop()}
                  </Text>
                </Group>
                <Group gap={4} align="center" wrap="nowrap">
                  <ActionIcon
                    component="a"
                    href={project.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="subtle"
                    size="sm"
                    aria-label="Open in new tab"
                  >
                    <IconExternalLink size={16} />
                  </ActionIcon>
                  <ActionIcon
                    component="a"
                    href={project.pdfUrl}
                    download
                    variant="subtle"
                    size="sm"
                    aria-label="Download"
                  >
                    <IconDownload size={16} />
                  </ActionIcon>
                </Group>
              </div>
              <iframe
                src={`${project.pdfUrl}#toolbar=0&navpanes=0&view=FitH`}
                title={`${project.title} — document`}
                className={classes.pdfViewer}
              />
            </div>
          </div>
        )}

        {/* Tags */}
        <div>
          <Text className="section-label" mb="md">
            stack
          </Text>
          <Group gap="xs">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
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
            <Text className="section-label" mb="md">
              links
            </Text>
            <Group gap="md">
              {project.githubUrl && (
                <Button
                  component="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
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
                  leftSection={<IconExternalLink size={16} />}
                  className={classes.linkButton}
                >
                  Live Site
                </Button>
              )}
            </Group>
          </div>
        )}

        <Divider />

        <Button
          component={Link}
          to="/projects"
          variant="subtle"
          leftSection={<IconArrowLeft size={14} />}
          className={classes.backButton}
        >
          All projects
        </Button>
      </Stack>
    </Container>
  );
}
