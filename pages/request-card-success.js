/* eslint-disable */
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="text-center ">
      <div className="alert alert-success">
        <h1>Success!</h1>
        <p className="lead">You will recieve your virtual card soon.</p>
      </div>
      <Link href="/">
        <a className="btn btn-outline-light">← Home</a>
      </Link>
    </div>
  );
}
