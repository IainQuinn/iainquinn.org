import { Button, Container, Group, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./HeroImageRight.module.css";

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              From electrons to applications.
            </Title>

            <Text className={classes.description} mt="xl">
              Full Stack Developer · Computational Chemist · Hardware Maker —
              writing code, designing circuits, and simulating molecules.
            </Text>

            <Group mt={40} gap="md">
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
                to="/about"
                variant="default"
                size="md"
                className={classes.control}
              >
                About me
              </Button>
            </Group>
          </div>
        </div>
      </Container>
    </div>
  );
}
