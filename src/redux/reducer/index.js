import {combineReducers} from 'redux';
import projectsReducer from './projectsReducer';
import projectReducer from './projectReducer';
import counselorsReducer from './counselorsReducer';
import counselorReducer from './counselorReducer';
import listNewsReducer from './listNewsReducer';
import newsReducer from './newsReducer';

const reducer = combineReducers({
  projects: projectsReducer,
  project: projectReducer,
  counselors: counselorsReducer,
  counselor: counselorReducer,
  listNews: listNewsReducer,
  news: newsReducer,
});

export default reducer;
