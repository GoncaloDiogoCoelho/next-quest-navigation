import { useRouter } from "next/router";
import Link from "next/link";

export default function ItemsTypePage() {
  const router = useRouter();
  const { type } = router.query;

  console.log(type);

  return (
    <div>
      <h1>
        File [type].js na pasta Terms - Items type: <h6>{type}</h6>
      </h1>
      <li>
        <Link href="/gate/terms">Back</Link>
      </li>
    </div>
  );
}
