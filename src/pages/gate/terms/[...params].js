import { useRouter } from "next/router";
import Link from "next/link";

export default function DetailsPage() {
  const router = useRouter();
  const { params } = router.query; //array

  if (!params) return null;
  console.log(params);
  return (
    <div>
      {params[0] && <h4>{`Item's type: ${params[0]}`}</h4>}
      {params[1] && <h4>{`Item's manufacturer: ${params[1]}`}</h4>}
      {params[2] && <h4>{`Item's model: ${params[2]}`}</h4>}
      <li>
        <Link href="/gate/terms">Back</Link>
      </li>
    </div>
  );
}
