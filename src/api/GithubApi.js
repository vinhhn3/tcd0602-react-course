import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.github.com",
});

const getUsers = (query) => {
  return axiosClient.get(`/search/users?q=${query}`);
};

const getUser = (login) => {
  return axiosClient.get(`/users/${login}`);
};

const GithubApi = {
  getUsers,
  getUser,
};

export default GithubApi;
