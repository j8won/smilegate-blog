import axios from 'axios';

const getAllPostsByType = async (type) => {
  const { data } = await axios.get(process.env.REACT_APP_SERVER_API + '/post/category', {
    params: {
      type: type,
    }
  });

  return data;
}

export default {
  getAllPostsByType,
}
