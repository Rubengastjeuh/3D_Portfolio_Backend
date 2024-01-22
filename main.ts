import { Hono } from 'https://deno.land/x/hono/mod.ts'
import { cors } from 'https://deno.land/x/hono/middleware.ts'

import ProjectController from "./controllers/ProjectController.ts";
import PersonalInfoController from "./controllers/PersonalInfoController.ts";
import ContactInfoController from "./controllers/ContactInfoController.ts";
import StudyController from "./controllers/StudyController.ts";
import SkillController from "./controllers/SkillController.ts";
import { loadData } from "./dataLoader.ts";

const app = new Hono({ strict: false });

// Enable CORS for all routes under /api/*
app.use('/api/*', cors());

app.route("/api/projects", ProjectController);
app.route("/api/personalInfo", PersonalInfoController);
app.route("/api/contactInfo", ContactInfoController);
app.route("/api/studies", StudyController);
app.route("/api/skills", SkillController);
await loadData();
Deno.serve(app.fetch);
