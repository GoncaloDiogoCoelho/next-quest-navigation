import Link from "next/link";

export default function even() {
  return (
    <div>
      <h1>Maybe more stuff to show here</h1>
      <ul>
        <li>
          <Link href="/gate/terms">Terms and conditions</Link>
        </li>
        <li>
          <Link href="/gate/terms/more">Back</Link>
        </li>
        <li>
          <Link href="/gate">Home</Link>
        </li>
      </ul>
    </div>
  );
}
