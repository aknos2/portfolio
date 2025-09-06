import doggoBlogHigh from '../assets/projects/doggo-high.png'
import doggoBlogLow from '../assets/projects/doggo-low.png';
import memoryCardHigh from '../assets/projects/memoryCard-high.webp';
import memoryCardLow from '../assets/projects/memoryCard-low.webp';
import fileUploaderHigh from '../assets/projects/fileuploader-high.png'
import fileUploaderLow from '../assets/projects/fileuploader-low.png'


export const projects = [ 
  {
    id: 1,
    title: "Blog api",
    description: "Blog about a Corgi dog. You can see articles, create an account, and post and like comments.",
    frontend: "Javascript, React",
    backend: "Node.js, Express",
    database: "PostgreSQL, Prisma",
    authentication: "Passport.js, JSON Web Token",
    github: "https://github.com/aknos2/blogAPI",
    url: "https://doggo-blog.vercel.app/",
    img: {
      high: doggoBlogHigh,
      low: doggoBlogLow
    }
  },
   {
    id: 2,
    title: "Memory Card Game",
    description: "Card game which you have to choose if the randomly generated cat photo alredy appeared or not.",
    languages: [
      "Javascript, React",
      "Unplash API",
    ],
    github: "https://github.com/aknos2/memory-card",
    url: "https://github.com/aknos2/memory-card",
    img: {
      high: memoryCardHigh,
      low: memoryCardLow
    }
  },
  {
    id: 3,
    title: "File Uploader",
    description: "Node.js + Supabase project for storing, organizing, and retrieving files/folders with real-time database integration",
    frontend: "Javascript, React",
    database: "PostgreSQL, Prisma",
    authentication: "Supabase, Multer, Passport.js",
    github: "https://github.com/aknos2/file-uploader",
    url:"https://file-uploader-hyhw.onrender.com/",
    img: {
      high: fileUploaderHigh,
      low: fileUploaderLow
    }
  },
  {
    id: 4,
    title: "Weather app",
    description: "World weather app using API and JS promises. It has day and night background wallpaper cycle.",
    frontend: "Javascript, React",
    database: "PostgreSQL, Prisma",
    authentication: "Supabase, Multer, Passport.js",
    github: "https://github.com/aknos2/weather-app",
    url:"https://aknos2.github.io/weather-app/",
    img: {
      high: fileUploaderHigh,
      low: fileUploaderLow
    }
  }
]