/* eslint-disable */
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <h1>404: Page Not Found</h1>
      <div className="pt-4" />
      <Link href="/">
        <a className="btn btn-outline-light">← Home</a>
      </Link>
    </div>
  );
}
