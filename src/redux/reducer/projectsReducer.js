export default function projectsReducer(state = [], action) {
  if (action.type === 'FETCH_DATA_PROJECT') {
    return action.projects;
  }
  return state;
}
