const initialState = {
  topics: [],
  routeParam: null,
  topic: {},
  filteredTopics: [],
};

const forum = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TOPICS":
      return {
        ...state,
        topics: action.topics,
        routeParam: action.routeParams,
      };

    case "GET_TOPIC":
      return { ...state, topic: action.topic, routeParam: action.id };

    case "ADD_POST":
      return { ...state };

    default:
      return state;
  }
};

export default forum;
