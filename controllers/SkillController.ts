
// SkillController.ts
import { Hono } from "https://deno.land/x/hono@v3.11.8/mod.ts";
import { Skill } from "../models/ISkill.ts";
import { skillValidator } from "../validators/skillValidator.ts";

const SkillController = new Hono({ strict: false });
const kv = await Deno.openKv();

SkillController.get("/", async (c) => {
  const records = kv.list({ prefix: ["skills"] });
  const skills: Skill[] = [];
  for await (const record of records) {
    skills.push(record.value as Skill);
  }
  return c.json(skills);
});

SkillController.get("/:id", async (c) => {
  const { id } = c.req.param();
  const record = await kv.get(["skills", Number.parseInt(id)]);
  const skill: Skill = record.value as Skill;
  if (!skill) {
    return c.json({ message: "Skill not found" }, 404);
  }
  return c.json(skill);
});

export default SkillController;