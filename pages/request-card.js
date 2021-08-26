/* eslint-disable */
import { Form } from "../components/request-card";

const HelpCard = () => (
  <div className="card d-flex flex-row" style={{ fontSize: "75%" }}>
    <img
      width="100px"
      height="100px"
      src="/algeria-map.png"
      style={{
        flexShrink: 0, // prevent shrinking before image loads
      }}
    />
    <div className="card-body border-left border-light p-2">
      Need help? Contact customer support:{" "}
      <u>
        <a href="tel:+213-542-90-50-08" className="d-block ">
          +213-542-90-50-08
        </a>
        <a href="email:support@americanrivergold.com" className="d-block ">
          support@americanrivergold.com
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
      <Form />
      <div className="pt-4" />
      <hr />
      <div className="pt-4" />
      <HelpCard />
    </div>
  );
}
