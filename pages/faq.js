/* eslint-disable */
import Link from "next/link";
import { prettyUsdCents } from "../components/cardUtils";
import { useVariables } from "../components/variablesContext";

export default function FaqPage() {
  const {
    support_email,
    support_phone,
    dinars_per_usd,
    card_monthly_cost_usd_cents,
    card_price_dinars,
    dinarsToUsdCents,
  } = useVariables();

  return (
    <div>
      <h1>FAQ</h1>

      <div className="pt-3" />

      <Link href="/request-card">
        <a className="btn btn-lg btn-primary">Request a Card →</a>
      </Link>

      <div className="pt-3" />

      <u>
        <b>What is the American Credit Card?</b>
      </u>
      <p>
        The American Credit Card is a prepaid virtual card for Algeria and
        surrounding countries, which allows you to make purchases anywhere in
        the world and on the internet.
      </p>
      <u>
        <b>What are the fees?</b>
      </u>
      <p>
        ${prettyUsdCents(dinarsToUsdCents(card_price_dinars))} (
        {card_price_dinars} DZD) for the card plus $
        {prettyUsdCents(card_monthly_cost_usd_cents)} per month.
      </p>
      <p>
        Reload rate is {dinars_per_usd} DZD = 1 United States Dollar on the card
        (this may change according to economic conditions).
      </p>
      <u>
        <b>What do I get when I purchase a card?</b>
      </u>
      <p>
        The American Credit Card is a virtual card that allows you to use US
        dollars for online purchases.
      </p>
      <p>
        And, for the first time in Algeria, when you buy a credit card, it will
        be activated the same day!
      </p>
      <u>
        <b>How soon can I expect to be able to use my card?</b>
      </u>
      <p>Your card will be activated a few hours after payment is sent.</p>
      <u>
        <b>Will my card stop working after the card's expiration date?</b>
      </u>
      <p>
        You will get a new card with a new expiration for free after the card's
        expiration date.
      </p>
      <u>
        <b>Where can I use my card?</b>
      </u>
      <p>
        You can use the card anywhere that requires a credit card. You can link
        it to PayPal, Apple Pay, Google Pay, and other platforms.
      </p>
      <u>
        <b>How can I reload my card?</b>
      </u>
      <p>
        You can reload the card with Algerian Dinars through your service rep or{" "}
        <a
          href="https://americanrivergold.com/cardholders"
          className="link-primary"
        >
          online
        </a>
        .
      </p>
      <u>
        <b>What currencies are supported for reloading my card?</b>
      </u>
      <p>
        US Dollar, Euro, Cryptocurrency or Algerian Dinar. Ask your sales rep if
        you would like to pay with other types of currency.
      </p>
      <u>
        <b>Can I send money between other cardholders?</b>
      </u>
      <p>Yes.</p>
      <u>
        <b>How can I contact you?</b>
      </u>
      <ul>
        <li>
          <a href="https://www.facebook.com/groups/1182811245433982">
            <u>Facebook / Facebook Messenger</u>
          </a>
        </li>
        <li>
          Email:{" "}
          <u>
            <a href={`mailto:${support_email}`}>{support_email}</a>
          </u>
        </li>
        <li>
          Telephone / WhatsApp:{" "}
          <u>
            <a href={`tel:${support_phone}`}>{support_phone}</a>
          </u>
        </li>
      </ul>
      <p>
        <Link href="/request-card">
          <a className="btn btn-lg btn-primary">Request a Card →</a>
        </Link>
      </p>
    </div>
  );
}
