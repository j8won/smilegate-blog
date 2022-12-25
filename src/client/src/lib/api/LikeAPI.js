import axios from "axios";

const createLike = async (id) => {
  return await axios.put(process.env.REACT_APP_SERVER_API + '/like/' + id);
}

const deleteLike = async (id) => {
  return await axios.delete(process.env.REACT_APP_SERVER_API + '/like/' + id);
}

const getLike = async (id) => {
  return await axios.get(process.env.REACT_APP_SERVER_API + '/like/' + id);
}

export default {
  createLike,
  deleteLike,
  getLike
}
