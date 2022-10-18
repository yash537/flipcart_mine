import axios from "axios";

const URL = "http://localhost:8000";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (err) {
    console.log(err);
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export default authenticateSignup;

export const payUsingPaytm = async (data) => {
  try {
    let res = await axios.post(`${URL}/payment`, data);
    return res.data;
  } catch (err) {
    console.log("error while calling paytm api", err.message);
  }
};
