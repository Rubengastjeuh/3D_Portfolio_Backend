import { Hono } from "https://deno.land/x/hono@v3.11.8/mod.ts";
import ProjectController from "./controllers/ProjectController.ts"
import PersonalInfoController from "./controllers/personalInfoController.ts";
import ContactInfoController from "./controllers/contactInfoController.ts";
import StudyController from "./controllers/StudyController.ts";
import SkillController from "./controllers/SkillController.ts";

const app = new Hono({ strict: false }).basePath("/api");

app.route("/projects", ProjectController);
app.route("/personalInfo", PersonalInfoController);
app.route("/contactInfo", ContactInfoController);
app.route("/studies", StudyController);
app.route("/skills", SkillController);

Deno.serve(app.fetch);