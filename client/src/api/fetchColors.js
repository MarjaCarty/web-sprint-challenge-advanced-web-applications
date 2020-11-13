import { axiosWithAuth } from "../utils/axiosWithAuth";

export const fetchColors = () => {
  return axiosWithAuth()
    .get("http://localhost:5000/api/colors")
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};
