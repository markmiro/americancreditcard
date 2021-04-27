import { useState } from "react";
import {
  MIN_DINARS,
  CARD_PRICE_DINARS,
  MIN_USD,
  dinarsToUsd
} from "../cardUtils";

export function PaymentDetails() {
  const [payNow, setPayNow] = useState(true);
  const [dinars, setDinars] = useState(MIN_DINARS);

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
            <div className="form-group">
              <label>Amount to load on card:</label>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {CARD_PRICE_DINARS} DZD +
                  </span>
                </div>
                <input
                  type="number"
                  name="dinar_amount"
                  className="form-control"
                  placeholder="0.00"
                  value={dinars}
                  onChange={(e) => setDinars(parseInt(e.target.value, 10))}
                  required
                />
                <span className="input-group-append">
                  <span className="input-group-text">DZD</span>
                </span>
              </div>
              {dinars < MIN_DINARS ? (
                // 'd-block' because 'invalid-feedback' defaults to `display: none`
                <div className="invalid-feedback d-block">
                  Please put in at least ${MIN_USD}
                </div>
              ) : (
                // 'd-block' because 'invalid-feedback' defaults to `display: none`
                <div className="valid-feedback d-block">
                  You'll recieve <b>${dinarsToUsd(dinars).toFixed(2)}</b>
                </div>
              )}
            </div>

            <p>
              Please send <b>{CARD_PRICE_DINARS + dinars} DZD</b> to the bank
              account specified below.
              <br />
              <small className="text-muted">
                ({CARD_PRICE_DINARS} DZD is for the card + {dinars} DZD that you
                wanted loaded)
              </small>
            </p>

            <pre className="text-white bg-secondary p-2">
              <b>
                <u>Infos Poste</u>
              </b>
              <br />
              Nom: Loulachi
              <br />
              Prénom : Abdelheq
              <br />
              Compte : 0017691194
              <br />
              Clé : 77
              <br />
              Adresse: Batna
              <br />
              <br />
              <b>
                <u>BaridiMob</u>
              </b>
              <br />
              RIP: 00799999001769119477
              <br />
            </pre>

            <p>
              Once the payment is sent, put in the transation reference number.
            </p>

            <div className="form-group">
              <label>Transaction reference number</label>
              <input
                name="txn_reference"
                className="form-control"
                autoCapitalize="off"
                required
              />
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
