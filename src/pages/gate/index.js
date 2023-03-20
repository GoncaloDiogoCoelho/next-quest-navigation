import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Gate() {
  return (
    <div className={styles.main}>
      <div>
        <h1>You have entered the WebSite:</h1>
        <h3>Choose a link to navigate</h3>
        <ul>
          <li>
            <Link href="/gate/terms">Terms and Conditions</Link>
          </li>
          <li>
            <Link href="/gate/about">About</Link>
          </li>
          <li>
            <Link href="/gate/contacts">Contacts</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
