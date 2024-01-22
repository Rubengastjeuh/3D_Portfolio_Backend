import { Hono } from 'https://deno.land/x/hono/mod.ts'
import { cors } from 'https://deno.land/x/hono/middleware.ts'

import ProjectController from "./controllers/ProjectController.ts";
import PersonalInfoController from "./controllers/PersonalInfoController.ts";
import ContactInfoController from "./controllers/ContactInfoController.ts";
import StudyController from "./controllers/StudyController.ts";
import SkillController from "./controllers/SkillController.ts";
import { loadData } from "./dataLoader.ts";

const app = new Hono({ strict: false }).basePath("/api");

// Enable CORS for all routes under /api/*
app.use(
  '/api/*',
  cors({
    origin: 'http://localhost:3000',
    allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests'],
    allowMethods: ["OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE"],
    exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
    maxAge: 600,
    credentials: true,
  })
)
app.route("/projects", ProjectController);
app.route("/personalInfo", PersonalInfoController);
app.route("/contactInfo", ContactInfoController);
app.route("/studies", StudyController);
app.route("/skills", SkillController);
await loadData();
Deno.serve(app.fetch);
