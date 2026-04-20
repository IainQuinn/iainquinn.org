import { Container, Divider, Stack, Text, Title } from "@mantine/core";
import classes from "./writing.module.css";

export default function Writing() {
  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <div>
          <Text className={classes.sectionLabel}>{"// writing"}</Text>
          <Title order={1} className={classes.pageTitle} mt="xs">
            Writing
          </Title>
        </div>

        <Divider color="phosphor" opacity={0.3} />

        <div className={classes.terminal}>
          <Text className={classes.terminalPrompt}>
            {"$ cat coming_soon.txt"}
          </Text>
          <Text className={classes.terminalOutput} mt="md">
            {"> Writing about chemistry, code, and the space between."}
          </Text>
          <Text className={classes.terminalOutput} mt="xs">
            {"> Upcoming topics:"}
          </Text>
          <Text className={classes.terminalItem} mt="xs">
            {"  [ ] RISM theory for developers"}
          </Text>
          <Text className={classes.terminalItem}>
            {"  [ ] Building cheminformatics pipelines in Python"}
          </Text>
          <Text className={classes.terminalItem}>
            {"  [ ] Molecular data viz with React + RDKit.js"}
          </Text>
          <Text className={classes.terminalItem}>
            {"  [ ] TypeScript patterns for scientific web apps"}
          </Text>
          <Text className={classes.terminalOutput} mt="md">
            {"> Status: coming soon"}
          </Text>
          <Text className={classes.terminalCursor} mt="xs">
            {"_"}
          </Text>
        </div>
      </Stack>
    </Container>
  );
}
