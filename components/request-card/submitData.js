import axios from "axios";
import { uid } from "uid";

/**
 * Submits data to all the backends and returns when a response is given
 */
export async function submitData({
  data,
  frontImage,
  backImage,
  receiptImage
}) {
  // console.log("submitData", { data, frontImage, backImage, receiptImage });

  const submission_id = uid();
  const baseUrl = "https://americanrivergold.com";
  const basicReq = axios.post(`${baseUrl}/newcardrequests`, {
    submission_id,
    ...data
  });

  const frontReq = axios.post(`${baseUrl}/front_id_image`, {
    submission_id,
    ...frontImage
  });

  const backReq = axios.post(`${baseUrl}/back_id_image`, {
    submission_id,
    ...backImage
  });

  const receiptReq = axios.post(`${baseUrl}/receipt_image`, {
    submission_id,
    ...receiptImage
  });

  try {
    const [basicRes, frontRes, backRes, receiptRes] = await axios.all([
      basicReq,
      frontReq,
      backReq,
      receiptReq
    ]);
    if (
      basicRes.status === 200 &&
      frontRes.status === 200 &&
      backRes.status === 200 &&
      receiptRes.status === 200
    ) {
      return true;
    }
  } catch ([basicErr, frontErr, backErr, receiptErr]) {
    console.error([basicErr, frontErr, backErr, receiptErr]);
    throw new Error({
      data: basicErr,
      frontImage: frontErr,
      backImage: backErr,
      receiptImage: receiptErr
    });
  }
}
