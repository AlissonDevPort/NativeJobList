import axios from "axios";
import { api } from "../lib/axios";

export const getEmployees = async () => {
  try {
    const response = await api.get('/employees');
    return response.data;
  } catch (error) {
    console.error("Erro inesperado:", error);
    throw error;
  }
};
