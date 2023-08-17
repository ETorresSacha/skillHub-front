import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const { data } = await axios.get("https://skillhub-back-production.up.railway.app/user");
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const getUser = createAsyncThunk("users/getUser", async (id) => {
  try {
    const { data } = await axios.get(`https://skillhub-back-production.up.railway.app/user/${id}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const postUser = createAsyncThunk("users/postUser", async (userData) => {
  try {
    const { data } = await axios.post(
      "https://skillhub-back-production.up.railway.app/user/register",
      userData
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
});


export const logoutUser = createAsyncThunk("users/logoutUser", async () => {
  localStorage.removeItem("userCredentials");
  return null;
});


export const Payment = createAsyncThunk("users/Payment", async () => {
  try {
    const { data } = await axios.get("http://localhost:3001/payment");
    return data;
  } catch (error) {
    throw new Error(error);
  }
});
