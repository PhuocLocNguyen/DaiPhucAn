export default function projectReducer(state = [], action) {
  if (action.type === 'FIND_BY_ID') {
    return action.project;
  }
  return state;
}
