import {
  Badge,
  Button,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getArticle, formatDate } from "../../data/writing";
import classes from "./WritingDetail.module.css";

export default function WritingDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticle(slug);

  if (!article) {
    return (
      <Container size="md" py="xl">
        <Stack gap="md" align="flex-start">
          <Text className="section-label">404</Text>
          <Title order={1} className="page-title">
            Article not found
          </Title>
          <Button
            component={Link}
            to="/writing"
            variant="outline"
            mt="md"
            leftSection={<IconArrowLeft size={14} />}
          >
            Back to writing
          </Button>
        </Stack>
      </Container>
    );
  }

  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Button
          component={Link}
          to="/writing"
          variant="subtle"
          size="compact-sm"
          leftSection={<IconArrowLeft size={14} />}
          className={classes.back}
        >
          Writing
        </Button>

        <div>
          {article.date && (
            <Text className="section-label">{formatDate(article.date)}</Text>
          )}
          <Title order={1} className="page-title" mt="xs">
            {article.title}
          </Title>
          {article.tags.length > 0 && (
            <Group gap="xs" mt="md">
              {article.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  size="xs"
                  className={classes.tag}
                  classNames={{ label: classes.tagLabel }}
                >
                  {tag}
                </Badge>
              ))}
            </Group>
          )}
        </div>

        <Divider />

        <div className={classes.prose}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.body}
          </ReactMarkdown>
        </div>
      </Stack>
    </Container>
  );
}
