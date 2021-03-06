import { useState } from "react";
import { prettyUsdCents } from "../cardUtils";
import { useVariables } from "../variablesContext";

export function PaymentDetails() {
  const {
    dinarsToUsdCents,
    usdCentsToDinars,
    min_opening_balance_usd_cents,
    card_price_dinars,
  } = useVariables();
  const minDinars = usdCentsToDinars(min_opening_balance_usd_cents);
  const [payNow, setPayNow] = useState(true);
  const [dinars, setDinars] = useState(minDinars);
  console.log("@@minDinars", minDinars, min_opening_balance_usd_cents);
  return (
    <div className="card">
      <div className="card-body">
        <div
          className="btn-group btn-group"
          role="group"
          style={{ width: "100%" }}
        >
          <button
            type="button"
            className={`btn btn-outline-secondary ${payNow && "active"}`}
            onClick={() => setPayNow(true)}
          >
            Pay now
          </button>
          <button
            type="button"
            className={`btn btn-outline-secondary ${!payNow && "active"}`}
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
                    {card_price_dinars} DZD +
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
              {dinars < minDinars ? (
                // 'd-block' because 'invalid-feedback' defaults to `display: none`
                <div className="invalid-feedback d-block">
                  Please put in at least $
                  {prettyUsdCents(min_opening_balance_usd_cents)}
                </div>
              ) : (
                // 'd-block' because 'invalid-feedback' defaults to `display: none`
                <div className="valid-feedback d-block">
                  You'll receive{" "}
                  <b>${prettyUsdCents(dinarsToUsdCents(dinars))}</b>
                </div>
              )}
            </div>

            {dinars ? (
              <p>
                Please send <b>{card_price_dinars + dinars} DZD</b> to the bank
                account specified below.
                <br />
                <small className="text-muted">
                  ({card_price_dinars} DZD is for the card + {dinars} DZD that
                  you wanted loaded)
                </small>
              </p>
            ) : null}

            <pre className="bg-light text-secondary p-2">
              <b>
                <u>Infos Poste</u>
              </b>
              <br />
              Nom: Loulachi
              <br />
              Pr??nom : Abdelheq
              <br />
              Compte : 0017691194
              <br />
              Cl?? : 77
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

            {/* <p>
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
            </div> */}
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
