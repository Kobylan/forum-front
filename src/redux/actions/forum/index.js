import axios from "axios";
import { history } from "../../../history";
import { getComments } from "../comments";

const API_URI = "http://localhost:8080";
export const getTopics = (routeParams) => {
  return async (dispatch) => {
    await axios
      .get(`${API_URI}/api/posts?liked=0&created=0`, {
        params: routeParams,
      })
      .then((result) => {
        console.log("result", result);
        dispatch({
          type: "GET_TOPICS",
          topics: result.data.reverse(),
          routeParams,
        });
      })
      .catch((err) => console.log(err));
  };
};
export const getTopic = (id) => {
  return async (dispatch) => {
    await axios
      .get(`${API_URI}/api/post?id=${id}`)
      .then((result) => {
        console.log("result", result);
        dispatch({
          type: "GET_TOPIC",
          topic: result.data,
          id,
        });
      })
      .catch((err) => console.log("ERROR", err));
  };
};

export const addNewPost = (post) => {
  return (dispatch) => {
    axios.post(`${API_URI}/api/addpost`, post).then((response) => {
      console.log(response);
      dispatch({ type: "ADD_POST", post });
    });
  };
};

export const Reaction = (reaction, id) => {
  return (dispatch) => {
    axios.post(`${API_URI}/api/reaction`, reaction).then((response) => {
      if (reaction.post_id !== 0) {
        dispatch(getTopic(reaction.post_id));
      } else {
        dispatch(getComments(id));
      }
    });
  };
};
