import axios from "axios";
import { history } from "../../../history";
import { getComments } from "../comments";

const API_URI = "";
export const getTopics = (routeParams) => {
  return async (dispatch) => {
    await axios
      .get(`${API_URI}/api/posts?liked=0&created=0`, {
        params: routeParams,
      })
      .then((result) => {
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
        dispatch({
          type: "GET_TOPIC",
          topic: result.data,
          id,
        });
      })
      .catch((err) => console.log("ERROR", err));
  };
};
export const getMyTopics = () => {
  return async (dispatch) => {
    await axios
      .get(`${API_URI}/api/posts?liked=0&created=1`)
      .then((result) => {
        dispatch({
          type: "GET_MY_TOPICS",
          topics: result.data,
        });
      })
      .catch((err) => console.log("ERROR", err));
  };
};
export const getLikedTopics = () => {
  return async (dispatch) => {
    await axios
      .get(`${API_URI}/api/posts?liked=1&created=0`)
      .then((result) => {
        dispatch({
          type: "GET_LIKED_TOPICS",
          topics: result.data,
        });
      })
      .catch((err) => console.log("ERROR", err));
  };
};

export const addNewPost = (post) => {
  return (dispatch) => {
    axios.post(`${API_URI}/api/addpost`, post).then((response) => {
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
