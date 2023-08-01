// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaJava,
  FaAppStoreIos,
  FaAndroid,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGithubSquare,
  FaLink,
} from "react-icons/fa";
import { SiFlutter, SiJavascript, SiUnrealengine } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";
import { CgCPlusPlus } from "react-icons/cg";


// Projects Images (add your images to the images directory and import below)
import classroomLibraryImage from "./images/flutter.png";
import chatAppImage from "./images/swift-logo.png";
import QuickVideoImage from "./images/javascript.png";
import CPlusPlusImage from "./images/ISO_C++_Logo.svg.png";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "J-Whitehouse";

// Blog link icon (imported above)
export const Blog = <FaLink />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo = "I am a dedicated software developer with a passion for creating innovative applications that make a difference. With a strong background in various programming languages and a keen eye for detail, I strive to develop software that not only meets business needs but also creates a positive impact on users. I believe in the power of technology to solve problems and improve lives, and I am always looking for new challenges that allow me to apply my skills in meaningful ways. My goal is to create applications that are not only functional and user-friendly, but also make a significant contribution to the community.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <SiFlutter className="display-4" />,
    name: "Dart and Flutter",
  },
  {
    id: 2,
    skill: <FaPython className="display-4" />,
    name: "Python",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <TbBrandKotlin className="display-4" />,
    name: "Kotlin",
  },
  {
    id: 5,
    skill: <FaJava className="display-4" />,
    name: "Java",

  },
  {
    id: 6,
    skill: <CgCPlusPlus className="display-4" />,
    name: "C++",
  },
  {
    id: 7,
    skill: <FaAndroid className="display-4" />,
    name: "Android Development",
  },
  {
    id: 8,
    skill: <FaAppStoreIos className="display-4" />,
    name: "iOS Development",
  },
  {
    id: 9,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 10,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS",
  },
  {
    id: 11,

    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    id: 12,
    skill: <SiUnrealengine className="display-4" />,
    name: "Unreal Engine",
  },
];

// Resume link (string - "https://YourResumeUrl") 
export const resume = "https://drive.google.com/file/d/1W5nXPesi7sk-gIZPgqwhBktPJHB8wfgA/view";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["classroom_library", "QuickVideo", "chatApp", "HeapOfStudents"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "classroom_library",
    image: classroomLibraryImage,
  },
  {
    name: "QuickVideo",
    image: QuickVideoImage,
  },
  {
    name: "chatApp",
    image: chatAppImage,
  },
  {
    name: "HeapOfStudents",
    image: CPlusPlusImage,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xknenwvr";
