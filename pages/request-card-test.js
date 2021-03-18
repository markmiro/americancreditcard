import axios from "axios";
import testData from "../components/request-card/test-submit-data.json";
import frontImage from "../components/request-card/test-front-id-image.json";
import backImage from "../components/request-card/test-back-id-image.json";
import { submitData } from "../components/request-card/submit-data";

export default function RequestCardTest() {
  async function handleSubmit() {
    try {
      await submitData({ data: testData, frontImage, backImage });
      alert("success");
    } catch (errors) {
      console.error(errors);
    }
  }

  return (
    <div>
      <h1>Request Card Test 2</h1>
      <h5>To ARG backend</h5>
      <button type="button" onClick={handleSubmit}>
        Submit Fake Data
      </button>
      <hr />
      <h5>Serverless</h5>
      <button
        type="button"
        onClick={() => {
          axios
            .post("/api/request-card", testData)
            .then((response) => {
              console.log(response.data);
            })
            .catch((err) => {
              console.log({ axiosError: err });
              alert(err.message);
            });
        }}
      >
        Submit Fake
      </button>
    </div>
  );
}
