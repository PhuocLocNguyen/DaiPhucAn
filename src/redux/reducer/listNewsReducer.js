export default function listNewsReducer(state = [], action) {
  if (action.type === 'FETCH_DATA_NEWS') {
    return action.listNews;
  }
  return state;
}
