/* eslint-disable */
import Link from "next/link";
import {
  CARD_PRICE_USD,
  CARD_PRICE_DINARS,
  MONTHLY_COST_USD
} from "../components/cardUtils";

export default function IndexPage() {
  return (
    <div
      className="inner cover mt-auto d-flex flex-column h-100 text-center"
      style={{
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {/* <div className="h3">🇩🇿 + 🇺🇸</div> */}
      <img
        src="/payment-processors.png"
        height="48"
        alt=""
        style={{ filter: "grayscale(0.4)", opacity: 0.6 }}
      />

      <div className="pt-3" />

      <h1>Hello there</h1>
      <p className="lead">
        The American Credit Card is a prepaid virtual card, which allows
        Algerians to make purchases anywhere in the world and on the internet.
      </p>
      <p className="lead">
        <Link href="/request-card">
          <a className="btn btn-lg btn-primary">Request a Card →</a>
        </Link>
      </p>

      <div className="pt-4" />

      <div className="card bg-dark border-secondary">
        <div className="card-header border-secondary text-center">
          <div className="lead">
            ${CARD_PRICE_USD} ({CARD_PRICE_DINARS} DZD) for the card plus $
            {MONTHLY_COST_USD} per month.
          </div>
        </div>
        <div className="card-header border-secondary text-center">
          <div className="lead">
            And, for the first time in Algeria, when you buy a credit card, it
            will be activated the same day!
          </div>
        </div>
        <div className="card-header text-center">
          <div className="lead">Your card is activated within a few hours.</div>
        </div>
      </div>

      <div className="pt-4" />

      <p>
        <Link href="/faq">
          <a className="btn btn-outline-light">Learn More →</a>
        </Link>
      </p>
    </div>
  );
}
