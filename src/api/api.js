import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get(
      "https://backend.daviva.lt/API/InformacijaTestui"
    );
    console.log(response.data);
    return response.data;
  } catch (ex) {
    return null;
  }
};
