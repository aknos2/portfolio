// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "built_with": "Built with",
      "language": "言語",
      "tech_skill": "Tech Skills",
      "visit_youtube": "Visit my music channel",
      "animation": "Animations",
      "security": "Authentication & Security",
      "video_editing": "Video editing",
      "music_composing": "Music Composing",
      myDescription: {
        firstText: "Hello, I'm a front-end developer and designer",
        secondText: "My focus is on building artistic, user-friendly, and efficient interfaces",
        secondTextMobile: "My focus is on building" ,
        thirdTextMobile: "artistic, user-friendly, and efficient interfaces"
      }
    }
  },
  ja: {
    translation: {
      "built_with": "使用技術",
      "language": "language",
       "tech_skill": "テックスキル",
       "visit_youtube": "音楽チャンネル",
       "animation": "アニメーション",
       "security": "ユーザー認証・セキュリティ",
      "video_editing": "動画編集ソフト",
      "music_composing": "作曲ソフト",
      myDescription: {
        firstText: "Hello, フロントエンド開発者兼デザイナーです",
        secondText: "直感的に使える、美しく効率的なインターフェースを作ることを目指しています",
        secondTextMobile: "直感的に使える、美しく効率的な",
        thirdTextMobile: "インターフェースを作ることを目指しています"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;