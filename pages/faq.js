/* eslint-disable */
import Link from "next/link";

export default function FaqPage() {
  return (
    <div>
      <h1>FAQ</h1>
      <p>
        <Link href="/request-card">
          <a className="btn btn-lg btn-primary">Request a Card →</a>
        </Link>
      </p>
      <u>
        <b>What is the American Credit Card?</b>
      </u>
      <p>
        The American Credit Card is a prepaid card, which allows you to make
        purchases anywhere in the world and on the internet.
      </p>
      <u>
        <b>What are the fees?</b>
      </u>
      <p>$12 for the card plus $0.49 per month</p>
      <p>
        The first time you load the card is free. After that it's X% each time
        you reload the card.
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
      <p>Your card is activated a few hours after its acquisition.</p>
      <u>
        <b>When does my card expire?</b>
      </u>
      <p>Cards are valid for 3 years.</p>
      <u>
        <b>Where can I use my card?</b>
      </u>
      <p>
        You can use the card anywhere that requires a credit card. You can link
        it to PayPal and Google Pay.
      </p>
      <u>
        <b>How can I reload my card?</b>
      </u>
      <p>
        TBD <span className="text-danger">TODO</span>
        Reloading will follow the parallel market + a meager commission for the
        service.
      </p>
      <u>
        <b>What currencies are supported for reloading my card?</b>
      </u>
      <p>US Dollar, Euro, Cryptocurrency or Dinar</p>
      <u>
        <b>Can I send money between other cardholders?</b>
      </u>
      <p>Yes</p>
      <u>
        <b>How can I contact you?</b>
      </u>
      <ul>
        <li>
          <a href="https://www.facebook.com/americanrivergold.dz">
            Facebook / Facebook Messenger
          </a>
        </li>
        <li>
          WhatsApp <span className="text-danger">TODO</span>
        </li>
        <li>
          Telephone <span className="text-danger">TODO</span>
        </li>
        <li>
          Email <span className="text-danger">TODO</span>
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
