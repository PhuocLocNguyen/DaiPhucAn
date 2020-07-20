export default function newsReducer(state = [], action) {
  if (action.type === 'FIND_BY_ID_NEWS') {
    return action.news;
  }
  return state;
}
