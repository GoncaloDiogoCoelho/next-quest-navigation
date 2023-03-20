import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/Home.module.css";

export default function TermsOfUse() {
  let [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };
  const handleClick = () => {
    if (checked === true) {
      alert("Thanks for agreeing, enjoy your stay here");
    } else {
      alert("Please accept things without reading or asking");
    }
  };
  return (
    <>
      <div className={styles.main}>
        <div>
          <h1>This is the Terms Of Use Page</h1>
          <h3>
            Please check the box to have a nice journey through our web site
          </h3>
          <h3>Why do we use it?</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English.
          </p>
          <input
            type="checkbox"
            id="checkBox"
            onChange={handleCheck}
            checked={checked}
          />
          <h6>Confirm you what to check the box without any purpose</h6>
          <button onClick={handleClick}>Ok Lets Go!</button>
          <br />
          <ul>
            <li>
              <Link href="/gate/terms/more"> More Terms</Link>
            </li>
            <ul>
              <Link href="/gate/terms/terms">
                <h3>Terms Only</h3>
              </Link>
              <li>
                <Link href="/gate/terms/terms/law">Law Terms</Link>
              </li>
              <li>
                <Link href="/gate/terms/terms/medical">Medical Terms</Link>
              </li>
              <li>
                <Link href="/gate/terms/terms/sports">Sports Terms</Link>
              </li>
            </ul>
            <ul>
              <Link href="/gate/terms/conditions">
                <h3>Conditions Only</h3>
              </Link>
              <li>
                <Link href="/gate/terms/conditions/weather">
                  Weather Conditions
                </Link>
              </li>
              <li>
                <Link href="/gate/terms/conditions/economy">
                  Economy Conditions
                </Link>
              </li>
              <li>
                <Link href="/gate/terms/conditions/economy">
                  Politics Conditions
                </Link>
              </li>
            </ul>
            <li>
              <Link href="/gate/about">About</Link>
            </li>
            <li>
              <Link href="/gate/contacts">Contacts</Link>
            </li>
            <li>
              <Link href="/gate">Back</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
