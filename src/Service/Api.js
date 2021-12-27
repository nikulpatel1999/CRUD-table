import axios from "axios";

const url = "http://localhost:3004/users";

export const getUserData = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

export const addUserData = async (AddData) => {
  return await axios.post(url, AddData);
};

export const deleteData = async (id) => {
  return await axios.delete(`${url}/${id}`);
};

export const EditUserData = async (id, AddData) => {
  return await axios.put(`${url}/${id}`, AddData);
};
