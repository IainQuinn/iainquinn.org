import { Button, Container, Group, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./HeroImageRight.module.css";

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Text className={classes.label} mb="md">
              {"// iain quinn"}
            </Text>

            <Title className={classes.title}>
              From{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "#39ff14", to: "#ffb300" }}
              >
                electrons
              </Text>{" "}
              to{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "#ffb300", to: "#39ff14" }}
              >
                applications.
              </Text>
            </Title>

            <Text className={classes.description} mt="xl">
              Full Stack Developer · Computational Chemist · Hardware Maker —
              writing code, designing circuits, and simulating molecules.
            </Text>

            <Text className={classes.formula} mt="md">
              C₆H₁₂O₆ + {"{"} TypeScript, Python, RDKit {"}"} → production
            </Text>

            <Group mt={40} gap="md">
              <Button
                component={Link}
                to="/projects"
                variant="outline"
                color="phosphor"
                size="md"
                className={classes.control}
              >
                {">"} View my work
              </Button>
              <Button
                component={Link}
                to="/about"
                variant="subtle"
                color="amber"
                size="md"
                className={classes.controlSecondary}
              >
                {">"} About me
              </Button>
            </Group>
          </div>
        </div>
      </Container>
    </div>
  );
}
