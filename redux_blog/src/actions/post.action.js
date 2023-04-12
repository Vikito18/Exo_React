import axios from "axios";

export const GET_POST = "GET_POST ";

const getPost = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3008/posts ");
    dispatch({ type: GET_POST, payload: res.data });
  };
};

export default getPost;
