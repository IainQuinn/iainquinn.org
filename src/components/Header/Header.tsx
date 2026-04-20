import { Link, useLocation } from "react-router-dom";
import {
  ActionIcon,
  Burger,
  Container,
  Drawer,
  Group,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCode, IconMoon, IconSun } from "@tabler/icons-react";
import classes from "./Header.module.css";

const links = [
  { link: "/about", label: "About" },
  { link: "/projects", label: "Projects" },
  { link: "/writing", label: "Writing" },
  { link: "/contact", label: "Contact" },
];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const location = useLocation();

  const navItems = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={location.pathname === link.link || undefined}
      onClick={closeDrawer}
    >
      {link.label}
    </Link>
  ));

  return (
    <>
      <header className={classes.header}>
        <Container size="xl" className={classes.inner}>
          <Link to="/" className={classes.logo}>
            <Group align="center" gap={8}>
              <IconCode size={32} color="var(--mantine-color-phosphor-5)" />
              <Title order={3} className={classes.logoText}>
                iainquinn.org
              </Title>
            </Group>
          </Link>

          <Group gap={4} visibleFrom="sm">
            {navItems}
            <ActionIcon
              variant="subtle"
              size="lg"
              onClick={() => toggleColorScheme()}
              aria-label="Toggle colour scheme"
              className={classes.themeToggle}
            >
              {colorScheme === "dark" ? (
                <IconSun size={18} />
              ) : (
                <IconMoon size={18} />
              )}
            </ActionIcon>
          </Group>

          <Group hiddenFrom="sm" gap={8}>
            <ActionIcon
              variant="subtle"
              size="lg"
              onClick={() => toggleColorScheme()}
              aria-label="Toggle colour scheme"
              className={classes.themeToggle}
            >
              {colorScheme === "dark" ? (
                <IconSun size={18} />
              ) : (
                <IconMoon size={18} />
              )}
            </ActionIcon>
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              size="sm"
              color="var(--mantine-color-phosphor-5)"
            />
          </Group>
        </Container>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        title={
          <Group gap={8}>
            <IconCode size={24} color="var(--mantine-color-phosphor-5)" />
            <Text fw={700} ff='"JetBrains Mono", monospace' size="sm">
              iainquinn.org
            </Text>
          </Group>
        }
        hiddenFrom="sm"
        size="xs"
      >
        <Stack gap={4} mt="md">
          {navItems}
        </Stack>
      </Drawer>
    </>
  );
}
