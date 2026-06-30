import { Badge, Group, Stack, Text } from "@mantine/core";
import classes from "./SkillBadges.module.css";

interface SkillGroup {
  category: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "Mantine UI", "CSS Modules", "Vite"],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Flask", "REST APIs", "Node.js"],
  },
  {
    category: "Cheminformatics",
    skills: ["RDKit", "SMILES", "InChI", "OpenBabel", "Chemify"],
  },
  {
    category: "Infrastructure",
    skills: ["Docker", "GitHub Actions", "CI/CD", "Git"],
  },
  {
    category: "Science",
    skills: ["RISM Theory", "Molecular Simulation", "NumPy", "SciPy"],
  },
];

export function SkillBadges() {
  return (
    <Stack gap="lg">
      {skillGroups.map((group) => (
        <div key={group.category}>
          <Text className={classes.categoryLabel} mb="xs">
            {group.category}
          </Text>
          <Group gap="xs">
            {group.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className={classes.badge}
              >
                {skill}
              </Badge>
            ))}
          </Group>
        </div>
      ))}
    </Stack>
  );
}
