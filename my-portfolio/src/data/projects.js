import doggoBlogHigh from '../assets/projects/doggo-high.png'
import doggoBlogLow from '../assets/projects/doggo-low.png';

export const projects = [ 
  {
    id: 1,
    title: "Blog api",
    description: "Blog about a Corgi dog. You can see articles, create an account, and post and like comments.",
    frontend: "Javascript, React",
    backend: "Node.js, Express",
    database: "PostgreSQL, Prisma",
    authentication: "Passport.js, JSON Web Token",
    img: {
      high: doggoBlogHigh,
      low: doggoBlogLow
    }
  },
   {
    id: 2,
    title: "Memory Card Game",
    description: "Card game which you have to choose if the randomly generated cat photo alredy appeared or not.",
    frontend: "Javascript, React",
    database: "Unplash API",
    img: {
      high: doggoBlogHigh,
      low: doggoBlogLow
    }
  },
  {
    id: 3,
    title: "File Uploader",
    description: "Node.js + Supabase project for storing, organizing, and retrieving files/folders with real-time database integration",
    frontend: "Javascript, React",
    database: "PostgreSQL, Prisma",
    authentication: "Supabase, Multer, Passport.js",
    img: {
      high: doggoBlogHigh,
      low: doggoBlogLow
    }
  }
]