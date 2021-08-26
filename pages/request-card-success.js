/* eslint-disable */
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="text-center ">
      <div className="alert alert-success">
        {/* textDecoration to override global h1 styles */}
        <h1 style={{ textDecoration: "none" }}>Success!</h1>
        <p className="lead">You will receive your virtual card soon.</p>
      </div>
      <Link href="/">
        <a className="btn btn-outline-dark">← Home</a>
      </Link>
    </div>
  );
}
