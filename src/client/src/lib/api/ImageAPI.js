import axios from "axios";

const postImage = async (form) => {
  return await axios({
    method: 'post',
    url: `${process.env.REACT_APP_SERVER_API}/upload`,
    data: form,
    headers: {'Content-Type': 'multipart/form-data'}
  });
}

export default {
  postImage
}
