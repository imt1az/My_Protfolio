//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

import One from './assets/img/projects/One.png'
import Two from './assets/img/projects/Two.png'
import Three from './assets/img/projects/Three.png'
import Four from './assets/img/projects/Four.png'

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'Home',
    href: 'home',
  },
  {
    name: 'About',
    href: 'about',
  },
  {
    name: 'Portfolio',
    href: 'portfolio',
  },
  {
    name: 'Services',
    href: 'services',
  },
  // {
  //   name: 'Testimonials',
  //   href: 'testimonials',
  // },
  // {
  //   name:'Resume',
  //   href:'https://drive.google.com/file/d/1Q2BE7Tp58Rz3Uuu2jUEQUAIsO6BsbS4c/view?usp=sharing'
  // },
  {
    name: 'Contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/imtiaz-ahmed-chowdhury-b40179225/',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/imtiaz_ahmed_chowdhury_/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/imt1az',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: One,
    name: 'Tools Manufacture Management System',
    category: 'web development',
    Frontend :[
      'React',
      'Tailwind',
      'Daisy Ui'
    ],
    Backend:[
      'Node js',
      'Mongo DB'
    ],
    description:'This is a web base project where an user can order tools minimum and maximum quantity with the limitations.Order cancel, Update profile, Stripe Payement system.Admin can manage users, add products, manage orders, order shipment.JWT web token system, Firebase Authentication, Social Login.',
    Live : 'https://manufacture-84b6d.web.app/',
    Github:'https://github.com/imt1az/tools-maker-with-react-node-mongo'
  },
  {
    id: '2',
    image: Two,
    name: 'WarHouse Management System',
    category: 'web development',
    Frontend :[
      'React',
      'Tailwind',
    ],
    Backend:[
      'Node js',
      'Mongo DB'
    ],
    description:'In this project I build simple product storage system where owner can deliver and stock products.Manage Product, Add Items.Firebase Authentication, Social Login',
    Live : 'https://warhouse-mongo-node.web.app/home',
    Github:'https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-imt1az'
  },
  {
    id: '3',
    image: Three,
    name: 'Simple Cart System',
    category: 'web development',
  },
  {
    id: '4',
    image: Four,
    name: 'Product Review System',
    category: 'web development',
  },

];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
 
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Figma',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at imtiazemon625@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Dhaka, Bangladesh',
    description: 'Serving clients worldwide',
  },
];
