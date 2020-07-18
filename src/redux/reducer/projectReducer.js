export default function projectReducer(state = [], action) {
  if (action.type === 'FIND_BY_ID_PROJECT') {
    return action.project;
  }
  return state;
}
