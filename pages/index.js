/* eslint-disable */
import Link from "next/link";
import { prettyUsdCents } from "../components/cardUtils";
import { useVariables } from "../components/variablesContext";

export default function IndexPage() {
  const {
    card_price_dinars,
    card_monthly_cost_usd_cents,
    min_opening_balance_usd_cents,
  } = useVariables();

  return (
    <div
      className="inner cover mt-auto d-flex flex-column h-100 text-center"
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <div className="h1">🇩🇿 • 🇺🇸</div> */}
      <img src="/payment-processors.png" height="48" alt="" />

      <div className="pt-3" />

      <img
        width="240px"
        height="240px"
        src="/algeria-map.png"
        style={{
          flexShrink: 0, // prevent shrinking before image loads
        }}
      />

      <div className="pt-3" />

      <h1>American Credit Card</h1>

      <div className="pt-3" />

      <p className="lead">
        The American Credit Card is a prepaid credit card, which allows
        Algerians to make purchases anywhere in the world and on the internet.
      </p>
      <p className="lead">
        <Link href="/request-card">
          <a className="btn btn-lg btn-primary">Request a Card →</a>
        </Link>
      </p>

      <div className="pt-4" />

      <div className="card">
        <ul className="list-group list-group-flush">
          <div className="list-group-item text-center">
            <div className="lead">
              {card_price_dinars} DZD for the card plus $
              {prettyUsdCents(card_monthly_cost_usd_cents)} per month.
            </div>
            <div className="lead">
              Minimum opening balance is $
              {prettyUsdCents(min_opening_balance_usd_cents)}
            </div>
          </div>
          <div className="list-group-item text-center">
            <div className="lead">
              And, for the first time in Algeria, when you buy a credit card, it
              will be activated the same day!
            </div>
          </div>
          <div className="list-group-item text-center">
            <div className="lead">
              Your card is activated within a few hours.
            </div>
          </div>
        </ul>
      </div>

      <div className="pt-4" />

      <p>
        <Link href="/faq">
          <a className="btn btn-outline-dark">Learn More →</a>
        </Link>
      </p>
    </div>
  );
}
