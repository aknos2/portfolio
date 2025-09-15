import doggoBlogHigh from '../assets/projects/doggo-high.png'
import doggoBlogLow from '../assets/projects/doggo-low.png';
import doggoBlog2High from '../assets/projects/doggo2-high.webp'
import doggoBlog2Low from '../assets/projects/doggo2-low.png';
import doggoBlog3High from '../assets/projects/doggo3-high.webp'
import doggoBlog3Low from '../assets/projects/doggo3-low.png';
import memoryCardHigh from '../assets/projects/memoryCard-high.webp';
import memoryCardLow from '../assets/projects/memoryCard-low.webp';
import fileUploaderHigh from '../assets/projects/fileuploader-high.png'
import fileUploaderLow from '../assets/projects/fileuploader-low.png';
import battleshipHigh from '../assets/projects/battleship-high.png';
import battleshipLow from '../assets/projects/battleship-low.png';


export const mainProject = [
  {
    id: 1,
    title: "Doggo Blog",
    description: {
      eng: "A blog about a Corgi dog, where users can browse articles, create accounts, and interact by posting and liking comments.",
      jp: "コーギー犬をテーマにしたブログで、ユーザーは記事の閲覧、アカウント作成、コメントの投稿や「いいね」をすることが可能です。"
    },
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
    title: "Doggo Blog",
    github: "https://github.com/aknos2/blogAPI",
    url: "https://doggo-blog.vercel.app/",
    img: {
       high: doggoBlog2High,
        low: doggoBlog2Low
    },
    description: {
      eng: "You can easily filter articles through a filter menu by choosing dates, keywords, or tags.",
      jp: "フィルターメニューから日付、キーワード、タグを選択することで、記事を簡単に見つけます。"
    }
  },
  {
    id: 3,
    title: "Doggo Blog",
    github: "https://github.com/aknos2/blogAPI",
    url: "https://doggo-blog.vercel.app/",
    img: {
      high: doggoBlog3High,
      low: doggoBlog3Low
    },
    description: {
      eng: "You can select an image for your avatar and comment on the chat like a social app chat.",
      jp: "ソーシャルアプリのようにアバター画像を選択ができるし、チャット形式でコメントすることも可能です。"
    }
  }
]

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
    },

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
    },
    content: `I designed this game with mobile play in mind. A simple, short, yet addictive game.\n
              The theme I chose was cats, but the concept could easily be adapted to other themes.\n
              Future plans include adding more variety, such as special stages where images move, or fun mini-games like counting cats, inspired by WarioWare-style gameplay.`
  },
  {
    id: 3,
    title: "File Uploader",
    description: "Node.js + Supabase project for storing, organizing, and retrieving files/folders with real-time database integration",
    languages: [
      "Node.js, Express",
      "PostgreSQL, Prisma",
      "Passport.js (Local strategy)",
      "Supabase, Multer, Passport.js"
    ],
    github: "https://github.com/aknos2/file-uploader",
    url:"https://file-uploader-hyhw.onrender.com/",
    img: {
      high: fileUploaderHigh,
      low: fileUploaderLow
    },
    content: `This project is a full-stack file uploader built with Node.js and Supabase.\n
              It allows users to upload, organize, and retrieve files and folders in real time.\n
              The backend integrates Passport.js for authentication, Multer for server-side file handling, and Supabase for secure cloud storage and database management.`
  },
  {
    id: 4,
    title: "Battleship",
    description: "A fast-paced Battleship game built with JavaScript featuring a clean and intuitive UI/UX.",
    languages: [
      "Javascript",
      "Webpack, Jest",
    ],
    github: "https://github.com/aknos2/Battleship",
    url:"https://aknos2.github.io/Battleship",
    img: {
      high: battleshipHigh,
      low: battleshipLow
    },
    content: ` The game includes intelligent AI logic that targets consecutive squares when a hit is detected, and automatically marks all adjacent cells when a ship is destroyed for smoother gameplay.`
  }
]