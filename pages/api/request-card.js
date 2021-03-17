const axios = require("axios").default;

module.exports = (req, res) => {
  axios
    .post("https://americanrivergold.com/newcardrequests", req.body)
    .then((response) => {
      console.log({ axiosResponse: response.data });
      res.json(response.data);
    })
    .catch((err) => {
      console.log({ axiosError: err });
      alert(err.message);
      res.json(err);
    });
  // res.json({
  //   body: req.body,
  //   query: req.query,
  //   cookies: req.cookies
  // });
};
