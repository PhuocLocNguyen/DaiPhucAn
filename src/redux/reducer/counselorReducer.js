export default function counselorReducer(state = [], action) {
  if (action.type === 'FIND_BY_ID_COUNSELOR') {
    return action.counselor;
  }
  return state;
}
