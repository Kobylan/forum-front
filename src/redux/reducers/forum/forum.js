const initialState = {
  topics: [],
  routeParam: null,
  topic: {},
  filteredTopics: [],
}

const forum = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TOPICS":
      return { ...state, topics: action.topics, routeParam: action.routeParams }

    case "GET_TOPIC":
      return { ...state, topic: action.topic, routeParam: action.id }

    case "UPDATE_TOPICS":
      let topic = action.topic
      let updatedState = { ...state.topics, [topic.id]: { ...topic } }
      return { ...state, topics: updatedState }

    case "COMPLETE_POST":
      state.topics.find(i => i.id === action.id).isCompleted = !action.value
      return { ...state }

    case "STAR_POST":
      state.topics.find(i => i.id === action.id).isStarred = !action.value
      return { ...state }

    case "IMPORTANT_POST":
      state.topics.find(i => i.id === action.id).isImportant = !action.value
      return { ...state }

    case "TRASH_POST":
      state.topics.find(i => i.id === action.id).isTrashed = true
      return { ...state }

    case "UPDATE_LABEL":
      let postToUpdate = state.topics.find(i => i.id === action.id).tags
      if (!postToUpdate.includes(action.label)) postToUpdate.push(action.label)
      else postToUpdate.splice(postToUpdate.indexOf(action.label), 1)
      return { ...state }

    case "UPDATE_POST":
      let topicToUpdate = state.topics.find(i => i.id === action.id)
      topicToUpdate.title = action.title
      topicToUpdate.desc = action.desc
      return { ...state }

    case "ADD_POST":
      return { ...state }

    case "SEARCH_POST":
      if (action.val.length) {
        let filteredTopics = state.topics.filter(query => {
          return (
            query.title.toLowerCase().includes(action.val) ||
            query.desc.toLowerCase().includes(action.val)
          )
        })
        return { ...state, filteredTopics }
      } else {
        return { ...state }
      }

    case "CHANGE_FILTER":
      state.routeParam = action.filter
      return { ...state }

    default:
      return state
  }
}

export default forum
