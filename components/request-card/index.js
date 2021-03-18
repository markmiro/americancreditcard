/* eslint-disable */
import { useState } from "react";
import { useRouter } from "next/router";
import { Location } from "./location";
import { ReferalCode } from "./referal-code";
import { ImageUpload } from "./upload-id";
import { PaymentDetails } from "./payment-details";
import { submitData } from "./submit-data";
import testData from "./test-submit-data.json";

export function Form() {
  const router = useRouter();
  const [errors, setErrors] = useState(null);
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function debugAutoFill() {
    const setNameValue = (name, value) => {
      const el = document.getElementsByName(name)[0];
      if (el) el.value = value;
    };
    Object.keys(testData).map((k) => setNameValue(k, testData[k]));
    setNameValue("email_confirm", testData.email);
  }

  function goToSuccess() {
    router.push("/request-card-success");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors(null); // Reset any errors

    if (e.target["email"].value !== e.target["email_confirm"].value) {
      alert("Your confirmation email doesn't match.");
      e.target["email_confirm"].focus();
      return;
    }

    if (!frontImage) {
      alert("Please upload both the front of your ID.");
      document.getElementById("front_id_image_button").focus();
      return;
    }

    if (!backImage) {
      alert("Please upload both the back of your ID.");
      document.getElementById("back_id_image_button").focus();
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

    /**
     * NOTE:
     *
     * Since the form uses mostly uncontrolled inputs, all form input
     * values are retrieved using the `name` attribute for each input. This means
     * form components can be nested as deeply as desired and the value of that input
     * is still accessible through the form submit event handler.
     *
     * `e.target` is a standard JS (non-React) reference to the `form` DOM node.
     * You can also access this node in devtools by selecting the form element in the "Elements"
     * panel and opening the "Console" and typing `$0` to print out the selected DOM node.
     *
     * On submission the form DOM node (e.target in this case) gets an attribute added for each
     * form input that has a `name` HTML attribute. The is standard browser behavior, but good to know
     */

    const data = {
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
      txn_reference: e.target["txn_reference"]?.value ?? ""
    };

    try {
      setIsSubmitting(true);
      await submitData({
        data,
        frontImage: getImageData(frontImage),
        backImage: getImageData(backImage)
      });
      // Don't reset anything, just change route when success
      goToSuccess();
    } catch (errors) {
      alert("Submission failed. Please fix any errors and try again");
      setErrors(errors);
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      disabled={isSubmitting}
      encType="multipart/form-data"
    >
      {process.env.NODE_ENV === "development" && (
        <button type="button" onClick={debugAutoFill}>
          Auto Fill
        </button>
      )}
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

      <hr className="mt-4 mb-4" />

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

      <div className="card bg-dark border-secondary">
        <div className="card-header border-secondary text-center">
          Upload ID
        </div>
        <div className="card-body">
          <ImageUpload
            image={frontImage}
            onImageChange={setFrontImage}
            buttonId="front_id_image_button"
          >
            Upload Front Image
          </ImageUpload>
          <div className="pt-3" />
          <ImageUpload
            image={backImage}
            onImageChange={setBackImage}
            buttonId="back_id_image_button"
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
