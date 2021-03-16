import axios from "axios";
import testData from "../components/test-request-card-data.json";

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
    </div>
  );
}
