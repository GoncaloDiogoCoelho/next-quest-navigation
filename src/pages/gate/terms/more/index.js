import Link from "next/link";

export default function TermsOfUse() {
  return (
    <>
      <div>
        <h1>This is More terms</h1>

        <ul>
          <li>
            <Link href="/gate/terms/more/even">Even more</Link>
          </li>
          <li>
            <Link href="/gate/terms">Back</Link>
          </li>
          <li>
            <Link href="/gate">Home</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
