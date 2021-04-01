import { useState } from "react";

export function ReferalCode() {
  const [showReferralCode, setShowReferralCode] = useState(true);

  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={showReferralCode}
          onChange={(e) => setShowReferralCode(e.target.checked)}
          id="referralCheckbox"
        />
        <label className="form-check-label" htmlFor="referralCheckbox">
          I have a referral code
        </label>
      </div>

      {showReferralCode && <div className="pt-2" />}

      {showReferralCode && (
        <div className="form-group">
          <label>Referral code</label>
          <input
            name="referral_code"
            className="form-control"
            autoCapitalize="off"
            style={{ textTransform: "uppercase" }}
          />
        </div>
      )}
    </>
  );
}
