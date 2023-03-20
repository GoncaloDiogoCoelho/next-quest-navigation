import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    console.log("Index page did mount");
  }, []);

  return (
    <>
      <Head>
        <title>Navigation NextJS</title>
        <meta name="description" content="Understanding Navigation in NextJS 13" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <div>
            <h1>Enter in a world of page navigation on NextJS</h1>
            <h4>Check the links bellow:</h4>
            <ul>
              <li>
                <Link href="/gate">Enter</Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
