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
      <div className="h1">🇩🇿 + 🇺🇸</div>
      <h1 className="cover-heading">
        Use American dollars to make your purchases.
      </h1>
      <p className="lead">
        The American Credit Card is a prepaid card, which allows you to make
        purchases anywhere in the world and on the internet.
      </p>
      <p className="lead">
        <Link href="/request-card">
          <a className="btn btn-lg btn-primary">Request a Card →</a>
        </Link>
      </p>
      <hr />
      <p className="lead">$12 for the card plus $0.49 per month</p>
      <hr />
      <p className="lead">
        And, for the first time in Algeria, when you buy a credit card, it will
        be activated the same day!
      </p>
      <hr />
      <p className="lead">
        Your card is activated a few hours after its acquisition.
      </p>
      <p>
        <Link href="/faq">
          <a className="btn btn-secondary">Learn More →</a>
        </Link>
      </p>
      {/* <img
        width="100%"
        height="auto"
        src="/algeria-map.png"
        style={{
          maxWidth: "250px"
          // filter: "brightness(0.7) contrast(1.5) grayscale(0.4)"
        }}
      /> */}
    </div>
  );
}
