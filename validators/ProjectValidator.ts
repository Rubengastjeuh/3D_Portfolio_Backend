import { validator } from "https://deno.land/x/hono@v3.11.8/mod.ts";
import { Project } from "../models/IProject.ts";

export const projectValidator = validator("json", (value, c) => {
  const project = value as Project;
  
  if (!project.title) {
    return c.json({ message: "Title is required" }, 400);
  }
  if (project.title.trim().length < 1 || project.title.trim().length > 100) {
    return c.json(
      { message: "Title must be between 1 and 100 characters" },
      400,
    );
  }

  // Validate other fields as needed

  return { body: project };
});
