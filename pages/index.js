/* eslint-disable */
import Link from "next/link";

export default function IndexPage() {
  return (
    <div
      className="inner cover mt-auto d-flex flex-column h-100 text-center"
      style={{
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div className="h1">🇩🇿</div>
      <h1 className="cover-heading">Hello, Algeria.</h1>
      <p className="lead" style={{ maxWidth: "45ch" }}>
        The virtual American River Gold card lets you use American dollars to
        make your purchases.
      </p>
      <p className="lead">
        <Link href="/request-card">
          <a className="btn btn-lg btn-success">Request a Card →</a>
        </Link>
      </p>
    </div>
  );
}
