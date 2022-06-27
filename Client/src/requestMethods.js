import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const HEROKU_URL = "https://biplo-ecommerce.herokuapp.com/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2FjMzY3YmFhOGQ2ZmZlMmNmN2IwMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTIyNjY3OCwiZXhwIjoxNjU1NDg1ODc4fQ.f-KSWMiQKo0d0x1Vo-bL_UYwTnHGhQFHFZ4nKwZhL8w";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const herokuRequest = axios.create({
  baseURL: HEROKU_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer  ${TOKEN}` },
});
