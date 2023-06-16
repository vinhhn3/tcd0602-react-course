import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.github.com",
});

const getUsers = (text) => {
  return axiosClient.get(`/search/users?q=${text}`);
};

const getUserByLogin = (login) => {
  return axiosClient.get(`/users/${login}`);
};

export { getUserByLogin, getUsers };
