import {combineReducers} from 'redux';
import projectsReducer from './projectsReducer';
import projectReducer from './projectReducer';
import counselorsReducer from './counselorsReducer';
import counselorReducer from './counselorReducer';

const reducer = combineReducers({
  projects: projectsReducer,
  project: projectReducer,
  counselors: counselorsReducer,
  counselor: counselorReducer,
});

export default reducer;
