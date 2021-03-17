/* eslint-disable */
import { Form } from "../components/request-card";

const HelpCard = () => (
  <div className="card bg-dark border-secondary d-flex flex-row">
    <img
      width="120px"
      height="120px"
      src="/algeria-map.png"
      style={{
        flexShrink: 0 // prevent shrinking before image loads
      }}
    />
    <div className="card-body border-left border-secondary">
      Need help? Contact customer support:{" "}
      <u>
        <a href="tel:+213-798-59-63-22" className="d-block ">
          +213-798-59-63-22
        </a>
      </u>
    </div>
  </div>
);

export default function RequestCard() {
  return (
    <div>
      <h1>Request Card</h1>

      <div className="pt-3" />

      <HelpCard />

      <div className="pt-4" />

      <Form />
    </div>
  );
}
