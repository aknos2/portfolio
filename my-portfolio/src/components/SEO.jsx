import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

function SEO() {
  const { i18n } = useTranslation();

  const descriptions = {
    en: "Portfolio of Elton Tomiyoshi showing his tech skills and projects he made with JavaScript and React.",
    ja: "エルトン・トミヨシのポートフォリオ。JavaScriptやReactを使ったプロジェクトと技術スキルを紹介します。"
  };

  return (
    <Helmet>
      <html lang={i18n.language} />
      <meta name="description" content={descriptions[i18n.language]} />
    </Helmet>
  );
}

export default SEO;
