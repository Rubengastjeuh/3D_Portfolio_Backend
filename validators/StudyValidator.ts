import { validator } from "https://deno.land/x/hono@v3.11.8/mod.ts";
import { Study } from "../models/IStudy.ts";

export const studyValidator = validator("json", (value, c) => {
  const study = value as Study;

  // Validate other fields as needed
  if (!study.school) {
    return c.json({ message: "School is required" }, 400);
  }

  // Add more validations for other fields

  return { body: study };
});
