import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Reed Dow | Web Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilephoto.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/1ZBYRlVCyVBFLOV_wzvlRQcuuWX0vY28dBa9plRsWrk4/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'StockAlert-Dashboard.png',
    title: 'StockAlert',
    info: 'React / Redux and Node.js website for viewing real-time stock quotes, candle charts, and news retrieved from the Finnhub API',
    info2: 'Using Nodemailer the website  sends an email if the stock drops more than 5%. Search through all U.S. stocks and add to the Watchlist. Hashed password protection. Responsive Design.',
    url: 'http://161.35.225.92:4000/',
    repo: 'https://github.com/ReedDow/Stockalert', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'JamSessions.png',
    title: 'Jam Sessions',
    info: 'Worked as a team to make a React / Redux and Node.js website that matches people who want to play music together based on location, skill, and instrument.',
    url: 'http://www.jam-sessions.live/',
    repo: 'https://github.com/tinder-for-musicians/jam-sessions', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'HealingPath.jpeg',
    title: 'Healing Path Psychotherapy',
    info: 'Wordpress and PHP website for a local business. Built and styled with Astra and Elementor.',
    url: '',
    repo: 'https://github.com/ReedDow/HealingPath', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'reed.r.dow@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/reed-dow/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ReedDow/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
