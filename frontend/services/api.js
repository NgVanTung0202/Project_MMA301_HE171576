import axios from "axios";
import { API_URL } from "../utils/constants";

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// User API
export const userApi = {
  register: (data) => api.post("/users", data),
  login: (data) => api.post("/users/login", data),
  getUser: (id) => api.get(`/users/${id}`),
  updateUser: (id, data) => api.put(`/users/${id}`, data),
  deleteUser: (id) => api.delete(`/users/${id}`),
  
  requestPasswordReset: (email) =>
    api.post("/users/request-password-reset", { email }),
  resetPassword: (email, code, newPassword) =>
    api.post("/users/reset-password", { email, code, newPassword }),
  // Add this method to the userApi object
changePassword: (userId, currentPassword, newPassword) =>
  api.post("/users/change-password", { userId, currentPassword, newPassword }),
verifyPasswordResetCode: (email, code) =>
  api.post("/users/verify-reset-code", { email, code }),  
};

 



export default api;
