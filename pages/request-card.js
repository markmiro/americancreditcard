/* eslint-disable */
import { useState } from "react";
import axios from "axios";
import { provinces } from "../components/provinces";
import { ImageUpload } from "../components/upload-id";
import { PaymentDetails } from "../components/payment-details";
import testData from "../components/test-data.json";

function Form() {
  const [showReferralCode, setShowReferralCode] = useState(false);
  const [showInAlgeria, setShowInAlgeria] = useState(true);
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
      in_algeria: e.target["in_algeria"].checked,
      algeria_province: e.target["algeria_province"]?.value ?? "",
      address: e.target["address"].value,
      referral_code: e.target["referral_code"]?.value ?? "",
      dinar_amount: e.target["dinar_amount"]?.value ?? 0,
      txn_reference: e.target["txn_reference"]?.value ?? "",
      front_id_image: getImageData(frontImage),
      back_id_image: getImageData(backImage)
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      disabled={isSubmitting}
      encType="multipart/form-data"
    >
      <button
        type="button"
        onClick={() => {
          console.log(testData);

          axios
            .post("https://americanrivergold.com/newcardrequests", testData)
            .then((response) => {
              console.log({ axiosResponse: response });
            })
            .catch((err) => {
              console.log({ axiosError: err });
              alert(err.message);
            });
        }}
      >
        Submit Fake Data
      </button>
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
          // Placeholder and pattern used as fallback for browsers that don't support native 'date' input
          placeholder="YYYY-MM-DD"
          pattern="\d{4}-\d{2}-\d{2}"
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
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="in_algeria"
            checked={showInAlgeria}
            onChange={(e) => setShowInAlgeria(e.target.checked)}
            id="inAlgeriaCheckbox"
          />
          <label className="form-check-label" htmlFor="inAlgeriaCheckbox">
            I live in Algeria
          </label>
        </div>
      </div>
      {showInAlgeria && (
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
            Upload Front Image
          </ImageUpload>
          <div className="pt-3" />
          <ImageUpload
            image={backImage}
            onImageChange={setBackImage}
            name="back_id_image"
          >
            Upload Back Image
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
            flexShrink: 0 // prevent shrinking before image loads
            // filter: "brightness(0.7) contrast(1.5) grayscale(0.4)"
          }}
        />

        <div className="card-body border-left border-secondary">
          Need help? Contact Amir:{" "}
          <u>
            <a href="tel:+213-798-59-63-22" className="d-block ">
              +213-798-59-63-22
            </a>
          </u>
        </div>
      </div>

      <div className="pt-4" />

      <Form />
    </>
  );
}
