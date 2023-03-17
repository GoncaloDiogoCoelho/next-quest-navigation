import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

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
      <div>
        <h1>This is the Terms Of Use Page</h1>
        <h3>
          Please check the box to have a nice journey through our web site
        </h3>
        <h3>Why do we use it?</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for lorem ipsum will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
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
        <li>
          <Link href="/">Home</Link>
        </li>
      </div>
    </>
  );
}
