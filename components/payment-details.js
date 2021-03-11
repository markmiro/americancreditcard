import { useState } from "react";

const MIN_DINARS = 2150;
function dinarsToUsd(dinars) {
  return (dinars - MIN_DINARS) / 180;
}

export function PaymentDetails() {
  const [payNow, setPayNow] = useState(true);
  const [dinars, setDinars] = useState(MIN_DINARS * 5);
  return (
    <div className="card bg-dark border-secondary">
      <div className="card-body">
        <div
          className="btn-group btn-group"
          role="group"
          style={{ width: "100%" }}
        >
          <button
            type="button"
            className={`btn btn-outline-light ${payNow && "active"}`}
            onClick={() => setPayNow(true)}
          >
            Pay now
          </button>
          <button
            type="button"
            className={`btn btn-outline-light ${!payNow && "active"}`}
            onClick={() => setPayNow(false)}
          >
            Pay in-person
          </button>
        </div>

        <div className="pt-3" />

        {payNow && (
          <>
            <p>
              Please send DZD to{" "}
              <span className="text-danger">TODO BANK ADDRESS</span> and put in
              the transaction reference number below.
            </p>

            <div className="form-group">
              <label>Dinars to send (DZD)</label>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">DZD</span>
                </div>
                <input
                  type="text"
                  name="dinar_amount"
                  className="form-control"
                  placeholder="0.00"
                  value={dinars}
                  onChange={(e) => setDinars(e.target.value)}
                  required
                />
              </div>

              {dinarsToUsd(dinars) < 0 ? (
                <div className="invalid-feedback">
                  Please put in at least {MIN_DINARS} DZD
                </div>
              ) : (
                <>
                  <i>The USD you'll receive on the card:</i> $
                  {dinarsToUsd(dinars).toFixed(2)}
                </>
              )}
            </div>

            <div className="form-group">
              <label>Transaction reference number</label>
              <input name="txn_reference" className="form-control" required />
            </div>
          </>
        )}
        {!payNow && (
          <div>
            You'll get a call from a sales representative when we're ready to
            process your request.
          </div>
        )}
      </div>
    </div>
  );
}
