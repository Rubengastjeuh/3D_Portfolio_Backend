import { Hono } from "https://deno.land/x/hono@v3.11.8/mod.ts";
import { PersonalInfo } from "../models/IPersonalInfo.ts";
import { personalInfoValidator } from "../validators/PersonalInfoValidator.ts";

const PersonalInfoController = new Hono({ strict: false });
const kv = await Deno.openKv();

/*
PersonalInfoController.get("/", async (c) => {
  const records = kv.list({ prefix: ["personalInfo"] });
  const personalInfos: PersonalInfo[] = [];
  for await (const record of records) {
    personalInfos.push(record.value as PersonalInfo);
  }
  return c.json(personalInfos);
});*/

PersonalInfoController.get("/:id", async (c) => {
  const { id } = c.req.param();
  const record = await kv.get(["personalInfo", id]);
  const personalInfo: PersonalInfo = record.value as PersonalInfo;
  if (!personalInfo) {
    return c.json({ message: "PersonalInfo not found" }, 404);
  }
  return c.json(personalInfo);
});

//validator if post or update

export default PersonalInfoController;
