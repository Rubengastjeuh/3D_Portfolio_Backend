import { Hono } from "https://deno.land/x/hono@v3.11.8/mod.ts";
import { Project } from "../models/IProject.ts";
import { projectValidator } from "../validators/ProjectValidator.ts";

const ProjectController = new Hono({ strict: false });
const kv = await Deno.openKv();

ProjectController.get("/all/:name", async (c) => {
  const { name } = c.req.param();
  const records = kv.list({ prefix: ['projects', name] });
  const projects: Project[] = [];

  for await (const record of records) {
    projects.push(record.value as Project);
  }

  return c.json(projects);
});




ProjectController.get("/:id", async (c) => {
  const { id } = c.req.param();
  const record = await kv.get(["projects", Number.parseInt(id)]);
  const project: Project = record.value as Project;
  if (!project) {
    return c.json({ message: "Project not found",id:  id}, 404);
  }
  return c.json(project);
});

// ProjectController.post("/", projectValidator, async (c) => {
//   const { body } = c.req.valid("json");
//   const project = { id: Date.now(), ...body };
//   await kv.set(["projects", project.id], project);
//   return c.json({ message: "Project successfully created", project: project });
// });
// ProjectController.delete("/:id", async (c) => {
//   const { id } = c.req.param();
//   const record = await kv.get(["projects", Number.parseInt(id)]);
//   const project: Project = record.value as Project;
//   if (!project) {
//     return c.json({ message: "Project not found" }, 404);
//   }
//   await kv.delete(["projects", Number.parseInt(id)]);
//   return c.json({ message: "Project successfully deleted" });
// });

export default ProjectController;
