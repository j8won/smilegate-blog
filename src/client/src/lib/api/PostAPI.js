import axios from 'axios';

const getAllPostsByType = async (type) => {
  const { data } = await axios.get(process.env.REACT_APP_SERVER_API + '/post/category', {
    params: {
      type: type,
    }
  });

  return data;
}

const createPost = async (title, content, category, thumbnailUrl, imageUrlArray) => {
  return await axios.post(process.env.REACT_APP_SERVER_API + '/post', {
    title: title,
    content: content,
    category: category,
    thumbnailUrl: thumbnailUrl,
    imageUrlArray: imageUrlArray,
  });
}

export default {
  getAllPostsByType,
  createPost
}
