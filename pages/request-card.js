/* eslint-disable */
import { useState } from "react";
import { cities } from "../components/cities";
import { ImageUpload } from "../components/upload-id";
import { PaymentDetails } from "../components/payment-details";

function Form() {
  const [showReferralCode, setShowReferralCode] = useState(false);
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    if (!frontImage || !backImage) {
      alert("Please upload both the front and back of your ID");
      setIsSubmitting(false);
      return;
    }

    const getImageData = (image) =>
      image && {
        name: image.file.name,
        last_modified: image.file.lastModified,
        size: image.file.size,
        type: image.file.type,
        data_url: image.data_url
      };

    console.log({
      first_name: e.target["first_name"].value,
      last_name: e.target["last_name"].value,
      dob: e.target["dob"].value,
      email: e.target["email"].value,
      phone: e.target["phone"].value,
      city: e.target["city"].value,
      address: e.target["address"].value,
      referral_code: e.target["referral_code"]?.value || "",
      dinar_amount: e.target["dinar_amount"]?.value || 0,
      txn_reference: e.target["txn_reference"]?.value || "",
      front_id_image: getImageData(frontImage),
      back_id_image: getImageData(backImage)
    });

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Check Devtools!");
    }, 1000);
  }

  return (
    <form
      onSubmit={handleSubmit}
      disabled={isSubmitting}
      encType="multipart/form-data"
    >
      <div className="form-group">
        <label>First name</label>
        <input name="first_name" className="form-control" required />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input name="last_name" className="form-control" required />
      </div>

      <div className="form-group">
        <label>Date of birth</label>
        <input
          type="date"
          name="dob"
          className="form-control"
          placeholder="DD/MM/YY"
          required
        />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input type="email" name="email" className="form-control" required />
        {/* <small className="form-text text-muted">We won't spam you</small> */}
      </div>

      <div className="form-group">
        <label>Phone number</label>
        <input type="tel" name="phone" className="form-control" required />
      </div>

      <div className="form-group">
        <label htmlFor="cityDataList" className="form-label">
          City
        </label>
        <input
          name="city"
          className="form-control"
          list="datalistOptions"
          id="cityDataList"
          placeholder="Type to search..."
          required
        />
        <datalist id="datalistOptions">
          {cities.map((city, i) => (
            <option key={i} value={city} />
          ))}
        </datalist>
      </div>

      <div className="form-group">
        <label>Address</label>
        <input name="address" className="form-control" required />
      </div>

      {/* <div className="pt-2" /> */}

      <hr className="border-secondary mt-4 mb-4" />

      <div className="card bg-dark border-secondary">
        <div className="card-body">
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
              <input name="referral_code" className="form-control" />
            </div>
          )}
        </div>
      </div>

      <div className="pt-4" />

      <PaymentDetails />

      <div className="pt-4" />

      <div className="card bg-dark border-secondary">
        <div className="card-header border-secondary text-center">
          Upload ID
        </div>
        <div className="card-body">
          <ImageUpload
            image={frontImage}
            onImageChange={setFrontImage}
            name="front_id_image"
          >
            Upload Front
          </ImageUpload>
          <div className="pt-3" />
          <ImageUpload
            image={backImage}
            onImageChange={setBackImage}
            name="back_id_image"
          >
            Upload Back
          </ImageUpload>
        </div>
      </div>

      <div className="pt-4" />

      <button
        type="submit"
        className="btn btn-primary btn-block"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit →"}
      </button>
    </form>
  );
}

export default function RequestCardPage() {
  return (
    <>
      <h1>Request Card</h1>

      <div className="pt-3" />

      <div
        className="card bg-dark border-secondary d-flex flex-row"
        style={{
          overflow: "hidden"
        }}
      >
        <img
          width="120px"
          height="120px"
          src="/algeria-map.png"
          style={{
            flexShrink: 0, // prevent shrinking before image loads
            filter: "brightness(0.7) contrast(1.5) grayscale(0.4)"
          }}
        />

        <div className="card-body border-left border-secondary">
          Need help? Contact Amir:{" "}
          <span className="text-danger">+213-###-###-####</span>
        </div>
      </div>

      <div className="pt-4" />

      {/* <div className="card bg-dark border-secondary">
        <img
          src="/algeria-map.png"
          width="100%"
          className="card-img-top"
          style={{
            filter: "grayscale(.5)"
          }}
        />
        <div className="card-body">
          Need help? Contact Amir:{" "}
          <span className="text-danger">+213-###-###-####</span>
        </div>
      </div> */}

      {/* <div className="pt-4" /> */}

      <Form />
    </>
  );
}
