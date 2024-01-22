import { validator } from "https://deno.land/x/hono@v3.11.8/mod.ts";
import { Skill } from "../models/ISkill.ts";

export const skillValidator = validator("json", (value, c) => {
  const skill = value as Skill;

  // Validate other fields as needed
  if (!skill.name) {
    return c.json({ message: "Skill name is required" }, 400);
  }

  // Add more validations for other fields

  return { body: skill };
});
