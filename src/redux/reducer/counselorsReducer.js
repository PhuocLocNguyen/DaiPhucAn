export default function counselorsReducer(state = [], action) {
  if (action.type === 'FETCH_DATA_COUNSELOR') {
    return action.counselors;
  }
  return state;
}
