import { Hono } from "https://deno.land/x/hono@v3.11.8/mod.ts";
import ProjectController from "./controllers/ProjectController.ts"
import PersonalInfoController from "./controllers/PersonalInfoController.ts";
import ContactInfoController from "./controllers/ContactInfoController.ts";
import StudyController from "./controllers/StudyController.ts";
import SkillController from "./controllers/SkillController.ts";
import {loadData} from "./dataLoader.ts";
const app = new Hono({ strict: false }).basePath("/api");

app.route("/projects", ProjectController);
app.route("/personalInfo", PersonalInfoController);
app.route("/contactInfo", ContactInfoController);
app.route("/studies", StudyController);
app.route("/skills", SkillController);
await loadData();
Deno.serve(app.fetch);
