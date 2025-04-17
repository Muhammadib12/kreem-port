import project1 from "../assets/projects/so7ba.jpg";
import project2 from "../assets/projects/proj2.jpg";
import project3 from "../assets/projects/braudeanal.jpg";
import project4 from "../assets/projects/ucare.jpg";

export const HERO_CONTENT = `My name is Kareem Zeedan, a motivated and ambitious 24-year-old software engineer. I recently completed my Bachelor of Science degree in Software Engineering. I am fluent in both English and Hebrew, and possess strong communication skills in both languages.

Throughout my academic journey, I have gained proficiency in several programming languages, including Java, JavaScript, Python, C, HTML, and React, among others. I am passionate about exploring new technologies and continuously expanding my skill set.

I have a strong interest in artificial intelligence, which led me to choose AI as the focus of my seminar. During my studies, I worked on numerous projects that deepened my knowledge and hands-on experience in the field. My enthusiasm for innovation and problem-solving drives me to seek opportunities where I can contribute meaningfully and grow as a professional.`;

export const ABOUT_TEXT = `In addition to my academic and technical background, I have a diverse range of work experiences that have shaped my character and work ethic. I began working at the age of 18 as a waiter, and later gained hands-on experience in cooling systems and as a delivery personnel in Akko, where I reside. More recently, I have worked as a freelance website developer, creating digital menus for small businesses in need of an online presence.

Outside of work, I am a curious and enthusiastic learner who spends a significant amount of time exploring new topics online and engaging with technology. I also have a deep passion for the sea. As an avid spearfisher, I dedicate at least two days each week to being in the water — it brings me peace, clarity, and a sense of relief like nothing else.`;

export const PROJECTS = [
  {
    id: 1,
    title: "Rahma - Cafe",
    image: project1,
    description:
      "Designed and developed a dynamic digital menu web application for a newly established business. The system displays available menu items and integrates with Firebase Firestore for real-time data storage and retrieval. Implemented an admin control panel that allows the business owner to efficiently manage menu content, including adding new items, deleting existing ones, and marking items as newly available. The solution enhances user accessibility and streamlines menu updates with a user-friendly interface.",
    technologies: ["React", "Talwind CSS", "JavaScript", "Firebase"],
    url: "https://rahma-cafe.vercel.app/",
  },
  {
    id: 2,
    title: "Phase - Farm",
    image: project2,
    description:
      "Developed a comprehensive web-based platform designed to assist farmers in monitoring crop conditions through sensor data collected by a custom-built robot. The robot, programmed using Blockly and Python, integrates principles of Industrial Internet of Things (IIoT) and Industry 4.0, showcasing a combination of mechanical, software, and hardware engineering skills. Deployed in the field, the robot continuously monitors soil humidity levels, alerts the farmer when irrigation is required, and provides the ability to remotely activate irrigation systems, thereby optimizing water usage and improving crop health.",
    technologies: ["React", "Talwind CSS", "JavaScript"],
    url: "https://phase2-smart-farm.vercel.app/",
  },
  {
    id: 3,
    title: "Braude - Analayzer",
    image: project3,
    description:
      "Designed and developed a dynamic digital menu web application for a newly established business. The system displays available menu items and integrates with Firebase Firestore for real-time data storage and retrieval. Implemented an admin control panel that allows the business owner to efficiently manage menu content, including adding new items, deleting existing ones, and marking items as newly available. The solution enhances user accessibility and streamlines menu updates with a user-friendly interface.",
    technologies: ["React", "Talwind CSS", "JavaScript"],
    url: "https://braude-analyzer.vercel.app/",
  },
  
  {
    id: 4,
    title: "UCare - Older",
    image: project4,
    description:
      "A website dedicated to the golden age people and our elderly that enables them track their health status and medicine requiered.",
    technologies: ["React", "Talwind CSS", "JavaScript"],
    url: "https://u-care-z98n.vercel.app/",
  },
  
  
  
  
];

export const CONTACT = {
  address: "Akko,North Israel",
  phoneNo: "+972 0556657503",
  email: "kareemzeedan@gmail.com"
};
 
