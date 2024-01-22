import { validator } from "https://deno.land/x/hono@v3.11.8/mod.ts";
import { ContactInfo } from "../models/IContactInfo.ts";

export const contactInfoValidator = validator("json", (value, c) => {
  const contactInfo = value as ContactInfo;

  // Validate other fields as needed
  if (!contactInfo.email) {
    return c.json({ message: "Email is required" }, 400);
  }
  // Add email format validation if needed

  return { body: contactInfo };
});
