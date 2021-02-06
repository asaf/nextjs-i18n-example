import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useI18n } from "../use-i18n";
import Link from "next/link";

export default function Home() {
  const { t } = useI18n(msgs);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{t("welcome_to", "next.js")}</h1>

        <div className={styles.grid}>
          <ul>
            <li>
              <Link href="/" locale="ja">
                <a>Japanese</a>
              </Link>
            </li>
            <li>
              <Link href="/" locale="en">
                <a>English</a>
              </Link>
            </li>
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

const msgs = {
  en: {
    welcome_to: "Welcome to {0}",
  },
  ja: {
    welcome_to: "ようこそ {0}",
  },
};
