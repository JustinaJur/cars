import axios from "axios";

export const getCars = async () => {
  try {
    const response = await axios.get(
      "https://backend.daviva.lt/API/InformacijaTestui"
    );
    return response.data;
  } catch (ex) {
    return null;
  }
};
