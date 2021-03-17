/* eslint-disable */
import { useState } from "react";
import { Location } from "./location";
import { ReferalCode } from "./referal-code";
import { ImageUpload } from "./upload-id";
import { PaymentDetails } from "./payment-details";

export function Form() {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    if (e.target["email"].value !== e.target["email_confirm"].value) {
      alert("Please make sure your email and email confirmation match.");
      return;
    }

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
      in_algeria: e.target["country"].value === "Algeria",
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
        <label>Confirm email address</label>
        <input
          type="email"
          name="email_confirm"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Phone number</label>
        <input type="tel" name="phone" className="form-control" required />
      </div>

      <hr className="border-secondary mt-4 mb-4" />

      <div className="card bg-dark border-secondary">
        <div className="card-body">
          <ReferalCode />
        </div>
      </div>

      <div className="pt-4" />

      <div className="card bg-dark border-secondary">
        <div className="card-header border-secondary text-center">Location</div>
        <div className="card-body">
          <Location />
        </div>
      </div>

      <div className="pt-4" />
      {/* <hr className="border-secondary mt-4 mb-4" /> */}

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
      <PaymentDetails />
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
