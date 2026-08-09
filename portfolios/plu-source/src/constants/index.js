import friendlyWeb from "../assets/projects/friendlyWeb.png";
import StudentManageImg from "../assets/projects/StudentManageImg.png";
import nanCCTVPic from "../assets/projects/NanCCTVPic.png";
import rankbudPic from "../assets/projects/RankBudPic.png";

export const HERO_CONTENT = `"I created this portfolio website using JavaScript, React, Tailwind CSS framework and the Framer Motion library. It’s designed to introduce myself, showcase my skills, and highlight the projects I’ve worked on."`;

export const ABOUT_TEXT = `A web developer with a strong interest in Backend and Full-Stack development, experienced in building web applications using JavaScript, Node.js, Express, and React. Familiar with server-side architecture, database management, and API integration, with a strong willingness to learn new technologies and continuously improve skills.`;

export const EDUCATION = [
  {
    school: "Chiang Mai University",
    program: "Digital Industry Integration Program",
    detail: "2025 - 2026, GPAX 3.83",
  },
  {
    school: "Koh Phangan Suksa School",
    program: "Sci - Math Program",
    detail: "2019 - 2025, GPAX 3.98",
  },
];

export const PROJECTS = [
  {
    title: "CCTV Accident Detection System",
    image: nanCCTVPic,
    description:
      "CCTV Accident Detection System detects road accidents in real time from live CCTV feeds and alerts responders automatically. As the backend developer, I built the APIs, the video-processing pipeline that serves the detection model, the incident database, and the real-time alerting system.",
    technologies: ["Python", "FastAPI", "OpenCV", "PostgreSQL"],
    linktag: 'https://nan-ngai-cctv.vercel.app/'
  },
  {
    title: "Student Management Web",
    image: StudentManageImg,
    description:
      "The system helps teachers manage student information more easily by combining attendance, grading, and performance tracking in one place. It reduces paperwork, eliminates the need for printed documents, and allows teachers to edit data anytime, anywhere through a simple web interface. The platform is easy to use, requires no installation, and makes it faster and more accurate to monitor each student’s progress.",
    technologies: ["SQL", "JavaScript", "Tailwind", "Node.js"],
    linktag: 'https://school-frontend-g1w9.onrender.com/'
  },
  {
  title: "Booking Web App",
  image: friendlyWeb,
  description:
    "This project is my first full-stack website, inspired by my family's hotel on Koh Phangan. It manages room bookings, prices, and availability, with users booking through the frontend and data sent to the backend.",
  technologies: ["MongoDB", "React.js", "Express.js", "Node.js"],
  linktag: 'https://friendly-web-indol.vercel.app/'
  },
    {
    title: "RankBuddy",
    image: rankbudPic,
    description:
      "RankBuddy is a full-stack web application designed to eliminate toxic online matchmaking by providing a Smart Teammate Directory where gamers can search, filter, and invite teammates based on both skill rank and self-selected behavior tags",
    technologies: ["Next.js", "Tailwind", "SQL"],
    linktag: 'https://rank-buddy.vercel.app/'
  },
];

export const CONTACT = {
  address: "110/40 M.6 Bantai Koh-Phagan Surat-Thani 84280",
  phoneNo: "+66 064-628-8437",
  email: "phlugiezstudentz@gmail.com"
};
