import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL =
  "http://4.224.186.213/evaluation-service";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization:
      `Bearer ${process.env.ACCESS_TOKEN}`,
  },
});

export async function getDepots() {
  const response =
    await api.get("/depots");

  return response.data;
}

export async function getVehicles() {
  const response =
    await api.get("/vehicles");

  return response.data;
}