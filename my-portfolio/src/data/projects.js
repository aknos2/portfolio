import doggoBlogHigh from '../assets/projects/doggo-high.webp'
import doggoBlogLow from '../assets/projects/doggo-low.png';
import doggoBlog2High from '../assets/projects/doggo2-high2.webp'
import doggoBlog2Low from '../assets/projects/doggo2-low.png';
import doggoBlog3High from '../assets/projects/doggo3-high2.webp'
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
      en: "A blog about a Corgi dog, where users can browse articles, create accounts, and interact by posting and liking comments.",
      ja: "コーギー犬をテーマにしたブログで、ユーザーは記事の閲覧、アカウント作成、コメントの投稿や「いいね」をすることが可能です。"
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
      en: "You can easily filter articles through a filter menu by choosing dates, keywords, or tags.",
      ja: "フィルターメニューから日付、キーワード、タグを選択することで、記事を簡単に見つけます。"
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
      en: "You can select an image for your avatar and comment on the chat like a social app chat.",
      ja: "ソーシャルアプリのようにアバター画像を選択ができるし、チャット形式でコメントすることも可能です。"
    }
  }
]

export const projects = [ 
  {
    id: 1,
    title: "Blog api",
    description: {
      en: "Blog about a Corgi dog. You can see articles, create an account, and post and like comments.",
      ja: "test"
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
    },

  },
  {
    id: 2,
    title: "Memory Card Game",
    description: {
      en: "Card game which you have to choose if the randomly generated cat photo alredy appeared or not.",
      ja: "ランダムに表示される猫の写真がすでに登場したものかどうかを判定するカードゲームです。"
    },
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
    content: {
      en: `I designed this game with mobile play in mind. A simple, short, yet addictive game.\n
           The theme I chose was cats, but the concept could easily be adapted to other themes.\n
           Future plans include adding more variety, such as special stages where images move, or fun mini-games like counting cats, inspired by WarioWare-style gameplay.`,
      ja: `このゲームはモバイル向けにデザインしました。ゲームは簡単で短時間でも遊べるし、中毒性のあるゲームです。\n
           テーマには猫を選びましたが、このコンセプトは他のテーマにも応用できます。\n
           将来的には、画像が動くスペシャルステージや、猫を数えるといった「メイド・イン・ワリオ」シリーズ風のミニゲームなど、より多彩な要素を追加していく予定です。`
    },
  },
  {
    id: 3,
    title: "File Uploader",
    description:{ 
      en: "Node.js + Supabase project for storing, organizing, and retrieving files/folders with real-time database integration.",
      ja: "Node.js + Supabaseを使用した、ファイルやフォルダの保存・整理・ダウンロードを行うプロジェクトで、リアルタイムデータベースとの連携も実装しています。"
    },
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
    content: {
      en: `This project is a full-stack file uploader built with Node.js and Supabase.\n
           It allows users to upload, organize, and retrieve files and folders in real time.\n
           The backend integrates Passport.js for authentication, Multer for server-side file handling, and Supabase for secure cloud storage and database management.`,
      ja: `このプロジェクトは、Node.js と Supabase を用いたフルスタックのファイルアップローダーです。\n
           ユーザーはファイルやフォルダをリアルタイムでアップロード、整理、ダウンロードすることができます。\n
           バックエンドでは、認証に Passport.js、サーバーサイドのファイル処理に Multer を使用し、安全なクラウドストレージおよびデータベース管理には Supabase を統合しています。`
    }
  },
  {
    id: 4,
    title: "Battleship",
    description:{ 
      en: "A fast-paced Battleship game built with JavaScript featuring a clean and intuitive UI/UX.",
      ja: "JavaScript で作られたテンポの速いバトルシップゲームで、シンプルで直感的な UI/UX を備えています。"
    },
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
    content: {
      en: ` The game includes intelligent AI logic that targets consecutive squares when a hit is detected, and automatically marks all adjacent cells when a ship is destroyed for smoother gameplay.`,
      ja: ` このゲームには、高度な AI ロジックが搭載されており、ヒットを検知すると隣のマスを狙い、船が破壊されると隣接するマスを自動でマークすることで、スムーズなゲームプレイを実現しています。`
    }
  }
]