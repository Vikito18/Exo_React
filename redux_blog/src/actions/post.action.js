import axios from "axios";

export const GET_POST = "GET_POST ";

const getPost = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3008/posts ")
      .then((res) => console.log(res.data));
  };
};

export default getPost;
