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
import { SiFlutter, SiJavascript, SiStyledcomponents, SiRedux } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

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
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I have a passion for developing tools that make the life of others easier and more enjoyable.";

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
    skill: <FaAndroid className="display-4" />,
    name: "Android Development",
  },
  {
    id: 7,
    skill: <FaAppStoreIos className="display-4" />,
    name: "iOS Development",
  },
  {
    id: 8,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 8,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS",
  },
  {
    id: 10,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
