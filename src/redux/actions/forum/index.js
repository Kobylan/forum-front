import axios from "axios";
import { history } from "../../../history";

export const getTopics = (routeParams) => {
  return async (dispatch) => {
    await axios
      .get("http://localhost:8080/api/posts", {
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
      .get("http://localhost:8080/api/post?id=" + id)
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

export const completePost = (topic) => {
  return (dispatch) => {
    dispatch({ type: "COMPLETE_POST", id: topic.id, value: topic.isCompleted });
  };
};

export const starPost = (topic) => {
  return (dispatch) => {
    Promise.all([
      dispatch({ type: "STAR_POST", id: topic.id, value: topic.isStarred }),
    ]);
  };
};

export const importantPost = (topic) => {
  return (dispatch) => {
    Promise.all([
      dispatch({
        type: "IMPORTANT_POST",
        id: topic.id,
        value: topic.isImportant,
      }),
    ]);
  };
};

export const trashPost = (id) => {
  return (dispatch, getState) => {
    const params = getState().topicApp.topic.routeParam;
    axios
      .post("/api/app/topic/trash-topic", id)
      .then((response) => dispatch({ type: "TRASH_POST", id }))
      .then(dispatch(getTopics(params)));
  };
};

export const updateTopic = (topic) => {
  const request = axios.post("/api/apps/topic/update-topic", topic);
  return (dispatch, getState) => {
    const params = getState().topicApp.topic.routeParam;
    request.then((response) => {
      Promise.all([
        dispatch({
          type: "UPDATE_TOPIC",
          topics: response.data,
        }),
      ]).then(() => dispatch(getTopics(params)));
    });
  };
};

export const updatePost = (id, title, desc) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_POST", id, title, desc });
  };
};

export const updateLabel = (id, label) => {
  return (dispatch, getState) => {
    dispatch({ type: "UPDATE_LABEL", label, id });
  };
};

export const addNewPost = (post) => {
  return (dispatch, getState) => {
    const params = getState().topicApp.topic.routeParam;
    axios.post("/api/apps/topic/new-post", { post }).then((response) => {
      dispatch({ type: "ADD_POST", post });
      dispatch(getTopics(params));
    });
  };
};

export const Reaction = (reaction) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8080/api/reaction", reaction)
      .then((response) => {
        dispatch(getTopic(reaction.post_id));
      });
  };
};

export const searchPost = (val) => {
  return (dispatch) => {
    dispatch({
      type: "SEARCH_POST",
      val,
    });
  };
};

export const changeFilter = (filter) => {
  return (dispatch) => {
    dispatch({ type: "CHANGE_FILTER", filter });
    history.push(`/topic/${filter}`);
    dispatch(getTopics({ filter }));
  };
};
