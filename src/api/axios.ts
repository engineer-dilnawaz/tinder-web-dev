import axios from "axios";

import { mockAdapter } from "./mockAdapter";

export const api = axios.create({
  baseURL: "https://mock-my-api.com",
  //   adapter: mockAdapter,
});

// api.interceptors.request.use((config) => {
//   return config;
// });

api.defaults.adapter = mockAdapter;
