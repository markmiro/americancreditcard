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
        <a href="tel:+213-542-90-50-08" className="d-block ">
          +213-542-90-50-08
        </a>
      </u>
    </div>
  </div>
);

export default function RequestCard() {
  return (
    <div>
      <h1>Request Card</h1>
      <Form />
      <div className="pt-4" />
      <hr />
      <div className="pt-4" />
      <HelpCard />
    </div>
  );
}
