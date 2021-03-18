import { useState } from "react";
import provinces from "./location-algeria-provinces.json";

export function Location() {
  const [country, setCountry] = useState("Algeria");

  return (
    <>
      <div className="form-check form-check-inline">
        <input
          value="Algeria"
          onChange={(e) => setCountry(e.target.value)}
          className="form-check-input"
          type="radio"
          name="country"
          id="inAlgeriaRadio"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="inAlgeriaRadio">
          I live in Algeria
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          value="Other"
          onChange={(e) => setCountry(e.target.value)}
          className="form-check-input"
          type="radio"
          name="country"
          id="inAlgeriaRadio2"
        />
        <label className="form-check-label" htmlFor="inAlgeriaRadio2">
          I don't live in Algeria
        </label>
      </div>

      <div className="pt-3" />

      {country === "Algeria" && (
        <div className="form-group">
          <label htmlFor="provinceDataList" className="form-label">
            Algerian province
          </label>
          <input
            name="algeria_province"
            className="form-control"
            list="datalistOptions"
            id="provinceDataList"
            placeholder="Type to search..."
            required
          />
          <datalist id="datalistOptions">
            {provinces.map((city, i) => (
              <option key={i} value={city} />
            ))}
          </datalist>
        </div>
      )}
      <div className="form-group">
        <label>Address</label>
        <input name="address" className="form-control" required />
      </div>
    </>
  );
}
