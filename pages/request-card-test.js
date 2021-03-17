import axios from "axios";
import testData from "../components/request-card/test-submit-data.json";
import { uid } from "uid";

export default function RequestCardTest() {
  return (
    <div>
      <h1>Request Card Test</h1>
      <button
        type="button"
        onClick={() => {
          // Shallow copy
          const withoutImages = { ...testData };
          delete withoutImages.front_id_image;
          delete withoutImages.back_id_image;

          console.log(withoutImages);

          axios
            .post(
              "https://americanrivergold.com/newcardrequests",
              withoutImages
            )
            .then((response) => {
              console.log({ axiosResponse: response });
            })
            .catch((err) => {
              console.log({ axiosError: err });
              alert(err.message);
            });
        }}
      >
        Submit Fake Data (without images)
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(testData);

          const submission_id = uid();

          axios
            .post("https://americanrivergold.com/front_id_image", testData)
            .then((response) => {
              console.log({ axiosResponse: response });
            })
            .catch((err) => {
              console.log({ axiosError: err });
              alert(err.message);
            });

          axios
            .post("https://americanrivergold.com/back_id_image", testData)
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
      <h2>Serverless</h2>
      <button
        type="button"
        onClick={() => {
          const withoutImages = { ...testData };
          delete withoutImages.front_id_image;
          delete withoutImages.back_id_image;

          axios
            .post("/api/request-card", withoutImages)
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
      <h2>Test API</h2>
      <button
        type="button"
        onClick={() => {
          axios
            .get("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => {
              console.log({ axiosResponse: response });
            })
            .catch((err) => {
              console.log({ axiosError: err });
              alert(err.message);
            });
        }}
      >
        Test API
      </button>
    </div>
  );
}
