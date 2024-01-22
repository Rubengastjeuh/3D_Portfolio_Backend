// StudyController.ts
import { Hono } from "https://deno.land/x/hono@v3.11.8/mod.ts";
import { Study } from "../models/IStudy.ts";
import { studyValidator } from "../validators/StudyValidator.ts";

const StudyController = new Hono({ strict: false });
const kv = await Deno.openKv();

StudyController.get("/", async (c) => {
  const records = kv.list({ prefix: ["studies"] });
  const studies: Study[] = [];
  for await (const record of records) {
    studies.push(record.value as Study);
  }
  return c.json(studies);
});

StudyController.get("/:id", async (c) => {
  const { id } = c.req.param();
  const record = await kv.get(["studies", Number.parseInt(id)]);
  const study: Study = record.value as Study;
  if (!study) {
    return c.json({ message: "Study not found" }, 404);
  }
  return c.json(study);
});

export default StudyController;

