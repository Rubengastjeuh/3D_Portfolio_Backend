import { validator } from "https://deno.land/x/hono@v3.11.8/mod.ts";
import { PersonalInfo } from "../models/IPersonalInfo.ts";

export const personalInfoValidator = validator("json", (value, c) => {
  const personalInfo = value as PersonalInfo;
  
  // Validate other fields as needed
  if (!personalInfo.name) {
    return c.json({ message: "Name is required" }, 400);
  }
  
  // Add more validations for other fields

  return { body: personalInfo };
});
