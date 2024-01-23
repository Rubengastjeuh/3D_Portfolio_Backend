import { ContactInfo } from "./models/IContactInfo.ts";
import { PersonalInfo } from "./models/IPersonalInfo.ts";
import { Project } from "./models/IProject.ts";
import { Study } from "./models/IStudy.ts";
import { Skill } from "./models/ISkill.ts";

const personalInfo : PersonalInfo= {
  name: 'Ruben',
  age: 21,
  dateOfBirth: '2002-12-23',
  nationality: 'Belgian',
  description: 'Dedicated and enthusiastic web developer with a strong emphasis on front-end technologies. Leveraging a creative and detail-oriented approach, I am passionate about crafting engaging and user-friendly digital experiences. With a solid foundation in HTML, CSS, and JavaScript, I continuously explore and integrate cutting-edge frameworks and libraries to deliver visually appealing and highly functional websites. Committed to staying abreast of industry trends and best practices, I thrive on transforming design concepts into responsive, dynamic, and intuitive user interfaces. My goal is to contribute innovative solutions and elevate the overall user experience through my skills in web development.',
  languages: ['English', 'Dutch','French'],
};
const contactInfo : ContactInfo= {
  email: 'ruben.vanpoucke@student.odisee.be',
  phoneNumber: '+123456789',
};
const studies : Study = {
  
    school: 'Odisee Gent',
    startYear: 2021,
    endYear: 2024,
    fieldOfStudy: 'Computer Science',

};
const allSkills: Skill[] = [
  { name: 'React' },
  { name: 'Vue' },
  { name: 'React Native' },
  { name: 'CSS' },
  { name: 'HTML' },
  { name: 'JavaScript' },
  { name: 'Laravel' },
  { name: 'Blade' },
  { name: 'MySQL' },
  { name: 'SCSS' },
  { name: 'ESP8266' },
  { name: 'Arduino' },
  { name: 'Electrical Engineering' },
  { name: 'Firebase' },
  { name: 'Expo' },
  { name: 'Firestore' },
  { name: 'Vue' },
  { name: 'Laravel' },
  { name: 'Deno' },
  { name: 'Node' },
  { name: 'Hono' },
  { name: 'Three.js' },
  { name: 'TypeScript' },
  { name: 'NoSQL' },
];

const projects :Project[] = [
  {
    id: 1,
    title: 'Steel And Outdoor Design',
    description: 'An innovative website crafted using Laravel and Blade. This dynamic site boasts admin tools, a user-friendly interface, and responsiveness. It serves as a gallery where administrators can showcase realizations and their accompanying details. The platform also features a dedicated contact page for seamless user interaction.',
    skills: ['Laravel', 'Blade', 'MySQL', 'SCSS', 'JavaScript'],
    ageWhenDone: 20, // Update with the correct age
    image: 'https://firebasestorage.googleapis.com/v0/b/wildcamping-mad.appspot.com/o/steelScreen.png?alt=media&token=42fd317d-3790-4e1c-b2b5-1f5334d4bab6', // Add the URL or path to the image
  },
  {
    id: 2,
    title: 'Smart Foosball',
    description: 'Revolutionizing the classic foosball experience, this smart foosball table is equipped with sensors in each goal. The score is automatically updated and displayed on SPI TFT displays. A user-friendly interface controlled by buttons allows for easy management. LED strips on the frame interact dynamically with the game. The ESP8266 module ensures online data storage and display, powered by a dedicated transformer.',
    skills: ['ESP8266', 'Arduino', 'Electrical Engineering'],
    ageWhenDone: 20, // Update with the correct age
    image: 'https://firebasestorage.googleapis.com/v0/b/wildcamping-mad.appspot.com/o/live_bg.jpg?alt=media&token=49483145-1e78-4231-8698-86a3c47a67f4', // Add the URL or path to the image
  },
  {
    id: 3,
    title: 'WildCamping',
    description: 'Embark on outdoor adventures with the WildCamping React Native app. Explore, add, edit, and review camping locations with ease. The app offers seamless offline functionality and user interaction. With a beautiful design, it utilizes Firebase for data storage and management, ensuring a smooth camping experience.',
    skills: ['React Native', 'Firebase', 'Expo', 'Firestore', 'CSS', 'JavaScript'],
    ageWhenDone: 21, // Update with the correct age
    image: 'https://firebasestorage.googleapis.com/v0/b/wildcamping-mad.appspot.com/o/logoColor.png?alt=media&token=7ff175f8-62e7-45c1-b47d-867cf5057d6e', // Add the URL or path to the image
  },
  {
    id: 4,
    title: 'SportingBus',
    description: 'Simplify away game logistics with the SportingBus system designed for football supporters\' clubs. Reserve tickets, view upcoming away games, and manage your journey effortlessly. This website, built with Vue, Laravel, and MySQL, provides a user-friendly interface for supporters.',
    skills: ['Vue', 'Laravel', 'MySQL', 'CSS', 'JavaScript'],
    ageWhenDone: 21, // Update with the correct age
    image: 'https://firebasestorage.googleapis.com/v0/b/wildcamping-mad.appspot.com/o/sportingScreen.png?alt=media&token=9089b9e3-3aaf-4d79-be7f-ea5d224479f6', // Add the URL or path to the image
  },
];

// Function to load data into the Deno KV database
export const loadData = async () => {
  const kv = await Deno.openKv(); // Provide a unique name for your database

  // Store personalInfo
  await kv.set(['personalInfo','Ruben'], personalInfo);

  // Store contactInfo
  await kv.set(['contactInfo','Ruben'], contactInfo);

  // Store studies
  await kv.set(['studies','Ruben'], studies);

  // Store allSkills
  await kv.set(['skills','Ruben'], allSkills);

  // Store projects
  const existingProjects = await kv.list({ prefix: ['projects', 'Ruben'] });
for await (const projectRecord of existingProjects) {
  await kv.delete(projectRecord.key);
}
  for (const project of projects) {
    const projectKey = ['projects', 'Ruben', project.id.toString()];
    await kv.set(projectKey, project);
  }


  console.log('Data loaded into the Deno KV database.');
};
