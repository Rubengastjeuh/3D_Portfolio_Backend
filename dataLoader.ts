import { ContactInfo } from "./models/IContactInfo.ts";
import { PersonalInfo } from "./models/IPersonalInfo.ts";
import { Project } from "./models/IProject.ts";
import { Study } from "./models/IStudy.ts";
import { Skill } from "./models/ISkill.ts";

const personalInfo : PersonalInfo= {
  name: 'Ruben',
  age: 21,
  dateOfBirth: '2000-01-01',
  nationality: 'Belgian',
  description: 'Passionate web developer with a focus on front-end technologies.',
  languages: ['English', 'Dutch'],
};
const contactInfo : ContactInfo= {
  email: 'ruben.vanpoucke@student.odisee.be',
  phoneNumber: '+123456789',
};
const studies : Study = {
  
    school: 'Example University',
    startYear: 2018,
    endYear: 2022,
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
];
const projects :Project[] = [
  {
    id: 1,
    title: 'Steel And Outdoor Design',
    description: 'An innovative website crafted using Laravel and Blade. This dynamic site boasts admin tools, a user-friendly interface, and responsiveness. It serves as a gallery where administrators can showcase realizations and their accompanying details. The platform also features a dedicated contact page for seamless user interaction.',
    skills: ['Laravel', 'Blade', 'MySQL', 'SCSS', 'JavaScript'],
    ageWhenDone: 20, // Update with the correct age
    image: 'https://firebasestorage.googleapis.com/v0/b/wildcamping-mad.appspot.com/o/logoColor.png?alt=media&token=7ff175f8-62e7-45c1-b47d-867cf5057d6e', // Add the URL or path to the image
  },
  {
    id: 2,
    title: 'Smart Foosball',
    description: 'Revolutionizing the classic foosball experience, this smart foosball table is equipped with sensors in each goal. The score is automatically updated and displayed on SPI TFT displays. A user-friendly interface controlled by buttons allows for easy management. LED strips on the frame interact dynamically with the game. The ESP8266 module ensures online data storage and display, powered by a dedicated transformer.',
    skills: ['ESP8266', 'Arduino', 'Electrical Engineering'],
    ageWhenDone: 20, // Update with the correct age
    image: 'https://firebasestorage.googleapis.com/v0/b/wildcamping-mad.appspot.com/o/logoColor.png?alt=media&token=7ff175f8-62e7-45c1-b47d-867cf5057d6e', // Add the URL or path to the image
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
    image: 'https://firebasestorage.googleapis.com/v0/b/wildcamping-mad.appspot.com/o/logoColor.png?alt=media&token=7ff175f8-62e7-45c1-b47d-867cf5057d6e', // Add the URL or path to the image
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
  for (const project of projects) {
    const projectKey = ['projects', project.id];
    await kv.set(projectKey, project);
  }

  console.log('Data loaded into the Deno KV database.');
};
