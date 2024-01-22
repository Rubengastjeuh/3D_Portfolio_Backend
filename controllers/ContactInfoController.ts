// ContactInfoController.ts
import { Hono } from "https://deno.land/x/hono@v3.11.8/mod.ts";
import { ContactInfo } from "../models/IContactInfo.ts";
import { contactInfoValidator } from "../validators/ContactInfoValidator.ts";

const ContactInfoController = new Hono({ strict: false });
const kv = await Deno.openKv();

ContactInfoController.get("/", async (c) => {
  const records = kv.list({ prefix: ["contactInfo"] });
  const contactInfos: ContactInfo[] = [];
  for await (const record of records) {
    contactInfos.push(record.value as ContactInfo);
  }
  return c.json(contactInfos);
});

ContactInfoController.get("/:id", async (c) => {
  const { id } = c.req.param();
  const record = await kv.get(["contactInfo", Number.parseInt(id)]);
  const contactInfo: ContactInfo = record.value as ContactInfo;
  if (!contactInfo) {
    return c.json({ message: "ContactInfo not found" }, 404);
  }
  return c.json(contactInfo);
});

export default ContactInfoController;

