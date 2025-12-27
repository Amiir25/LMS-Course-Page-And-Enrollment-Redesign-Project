// Icons
import arrowDown from './icons/arrow-down.webp'
import arrowUp from './icons/arrow-up.webp'
import check from './icons/check.webp'
import checkMark from './icons/check-mark.webp'
import halfStar from './icons/half-star.webp'
import onlineVideo from './icons/online-video.webp'
import playButton from './icons/play-button.webp'
import play from './icons/play.webp'
import search from './icons/search.webp'
import shoppingCart from './icons/shopping-cart.webp'
import star from './icons/star.webp'

export const icons = {
    arrowDown, arrowUp, check, checkMark, halfStar, onlineVideo, playButton,
    play, search, shoppingCart, star
};

// Images
import css from './images/css.webp'
import database from './images/database.webp'
import instructor from './images/instructor.webp'
import logo1 from './images/logo-1.webp'
import logo2 from './images/logo-2.webp'
import react from './images/react.webp'
import user from './images/user.webp'
import UXUI from './images/ux-ui.webp'
import webDevelopment from './images/web-development.webp'

export const images = {
    css, database, instructor, logo1, logo2, react, user, UXUI, webDevelopment
};

// Course data
export const courseData = {
    students: 1200,
    rate: 4.8,
};

// Course titles
export const courseTitle = {
    title: 'Introduction to Web Development',
    subtitle: 'A Step-by-Step Guide to HTML, CSS, and JavaScript for Beginners. Master the basics of web development by building real-world projects.',
}

// Course description
export const courseDescription = [
        'Want to build websites but don’t know where to start? This course is designed for absolute beginners who want to learn web development from scratch. You’ll start by learning HTML to structure web pages, use CSS to style and design beautiful layouts, and add interactivity with JavaScript.',
        'With easy-to-follow lessons, practical examples, and a guided mini project, you’ll gain hands-on experience while learning industry-relevant skills. By the end of the course, you’ll be able to build and customize your own websites and take your first step into the world of web development.',    
];

// Course objectives
export const courseObjectives = [
    [
        'Understand how the web works, including browsers, servers, and web technologies',
        'Create structured web pages using HTML5',
        'Style websites using CSS3, including layouts, colors, fonts, and responsive design',
        'Build modern layouts using Flexbox and CSS Grid',
        'Add interactivity and dynamic behavior using JavaScript',
    ],
    [
        'Work with variables, functions, conditions, and loops in JavaScript',
        'Manipulate the DOM to update content and respond to user actions',
        'Create responsive websites that work on desktop, tablet, and mobile devices',
        'Use best practices for clean, readable, and maintainable code',
        'Build and deploy a complete beginner-friendly web project',
    ],
];

// Requirements
export const requirements = [
    'No prior programming or web development experience required',
    'Basic computer skills (using a computer, files, and folders)',
    'A computer or laptop (Windows, macOS, or Linux)',
    'An internet connection for accessing course materials and resources',
    'A modern web browser (Google Chrome, Firefox, or Edge recommended)',
    'A free code editor (such as Visual Studio Code)',
    'Willingness to learn and practice through hands-on exercises',
];

// Instructor
export const instructorData = {
    name: 'Jon Doe',
    image: instructor,
    title: 'Senior Software Engineer with 8+ years of experiance',
    description: 'Jon Doe has extensive experience in front-end web development and technical training. He specialize in creating beginner-friendly learning paths that help students understand core web technologies and apply them in real-world scenarios. His teaching emphasizes best practices, clean code, and practical skills aligned with industry standards.'
}

// Related courses
export const relatedCourses = [
    { name: 'Advanced CSS & Responsive Design', image: css },
    { name: 'UX/UI Design Fundamentals', image: UXUI },
    { name: 'The Ultimate React Course', image: react },
];


// Course content
export const courseContent = [
    {
        id: 1,
        title: 'Introduction to Web Development',
        duration: '47 min',
        lectures: [
            { id: 1, title: 'How the Web Works - Browsers & Servers', duration: '12 min' },
            { id: 2, title: 'Front-End vs Back-End Development', duration: '10 min' },
            { id: 3, title: 'Web Development Tools Overview', duration: '11 min' },
            { id: 4, title: 'Setting Up the Development Environment', duration: '14 min' },
        ],
    },
    {
        id: 2,
        title: 'HTML Fundamentals',
        duration: '90 min',
        lectures: [
            { id: 1, title: 'Introduction to HTML', duration: '13 min' },
            { id: 2, title: 'HTML Document Structure', duration: '14 min' },
            { id: 3, title: 'Text Elements (Headings, Paragraphs)', duration: '11 min' },
            { id: 4, title: 'Links and Images', duration: '13 min' },
            { id: 5, title: 'Forms and Input Elements', duration: '15 min' },
            { id: 6, title: 'Semantic HTML & Best Practices', duration: '13 min' },
        ],
    },
    {
        id: 3,
        title: 'CSS Fundamentals',
        duration: '65 min',
        lectures: [
            { id: 1, title: 'Introduction to CSS', duration: '11 min' },
            { id: 2, title: 'CSS Syntax, Selectors & Properties', duration: '14 min' },
            { id: 3, title: 'Colors, Fonts & Text Styling', duration: '13 min' },
            { id: 4, title: 'The CSS Box Model', duration: '15 min' },
            { id: 5, title: 'Backgrounds & Images', duration: '12 min' },
        ],
    },
    {
        id: 4,
        title: 'CSS Layout & Responsive Design',
        duration: '72 min',
        lectures: [
            { id: 1, title: 'Display Properties & Positioning', duration: '14 min' },
            { id: 2, title: 'Flexbox Fundamentals', duration: '16 min' },
            { id: 3, title: 'CSS Grid Basics', duration: '16 min' },
            { id: 4, title: 'Responsive Design Principles', duration: '12 min' },
            { id: 5, title: 'Media Queries', duration: '14 min' },
        ],
    },
    {
        id: 5,
        title: 'JavaScript Basics',
        duration: '79 min',
        lectures: [
            { id: 1, title: 'Introduction to JavaScript', duration: '12 min' },
            { id: 2, title: 'Variables & Data Types', duration: '14 min' },
            { id: 3, title: 'Operators & Expressions', duration: '11 min' },
            { id: 4, title: 'Conditional Statements', duration: '14 min' },
            { id: 5, title: 'Loops', duration: '13 min' },
            { id: 6, title: 'Functions & Reusable Code', duration: '15 min' },
        ],
    },
    {
        id: 6,
        title: 'JavaScript & the DOM',
        duration: '69 min',
        lectures: [
            { id: 1, title: 'Understanding the DOM', duration: '13 min' },
            { id: 2, title: 'Selecting HTML Elements', duration: '14 min' },
            { id: 3, title: 'Modifying Content & Styles', duration: '15 min' },
            { id: 4, title: 'Event Handling', duration: '14 min' },
            { id: 5, title: 'Basic Form Validation', duration: '13 min' },
        ],
    },
    {
        id: 7,
        title: 'Mini Project – Build a Website',
        duration: '76 min',
        lectures: [
            { id: 1, title: 'Project Planning & Structure', duration: '12 min' },
            { id: 2, title: 'Building HTML Structure', duration: '16 min' },
            { id: 3, title: 'Styling with CSS', duration: '18 min' },
            { id: 4, title: 'Adding JavaScript Interactivity', duration: '18 min' },
            { id: 5, title: 'Testing & Improvements', duration: '12 min' },
        ],
    },
    {
        id: 8,
        title: 'Best Practices & Next Steps',
        duration: '57 min',
        lectures: [
            { id: 1, title: 'Clean Code & Organization', duration: '12 min' },
            { id: 2, title: 'Accessibility & Performance Basics', duration: '11 min' },
            { id: 3, title: 'Browser Compatibility', duration: '10 min' },
            { id: 4, title: 'Hosting & Deployment Overview', duration: '14 min' },
            { id: 5, title: 'Learning Path & Career Next Steps', duration: '10 min' },
        ],
    },
];
