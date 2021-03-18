import { useState } from "react";
import testData from "../components/request-card/test-submit-data.json";
import frontImage from "../components/request-card/test-front-id-image.json";
import backImage from "../components/request-card/test-back-id-image.json";
import { submitData } from "../components/request-card/submitData";

export default function RequestCardTest() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit() {
    setIsSubmitting(true);
    try {
      await submitData({ data: testData, frontImage, backImage });
      alert("success");
    } catch (errors) {
      console.error(errors);
    }
    setIsSubmitting(false);
  }

  return (
    <div>
      <h1>Request Card Test</h1>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        Submit Fake Data
      </button>
      <p className="text-muted">See console for output.</p>
    </div>
  );
}
