import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { IconArrowUpRight } from "@tabler/icons-react";
import { articles, formatDate } from "../../data/writing";
import classes from "./Writing.module.css";

export default function Writing() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Text className="section-label">writing</Text>
          <Title order={1} className="page-title" mt="xs">
            Writing
          </Title>
          <Text className={classes.subtitle} mt="xs">
            Notes on chemistry, code, and the space between.
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
          {articles.map((article) => (
            <Card
              key={article.slug}
              component={Link}
              to={`/writing/${article.slug}`}
              className={classes.card}
              padding="lg"
            >
              <Stack gap="sm" h="100%">
                <Group justify="space-between" align="center" wrap="nowrap">
                  <Badge
                    variant="outline"
                    size="xs"
                    className={classes.categoryBadge}
                  >
                    article
                  </Badge>
                  <IconArrowUpRight
                    size={16}
                    stroke={1.5}
                    className={classes.arrow}
                  />
                </Group>

                <Text className={classes.title}>{article.title}</Text>

                {article.description && (
                  <Text className={classes.description} style={{ flex: 1 }}>
                    {article.description}
                  </Text>
                )}

                {article.tags.length > 0 && (
                  <Group gap="xs">
                    {article.tags.map((tag) => (
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
                )}

                {article.date && (
                  <Text className={classes.date}>
                    {formatDate(article.date)}
                  </Text>
                )}
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
