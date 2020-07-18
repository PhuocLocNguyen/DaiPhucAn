import {combineReducers} from 'redux';
import projectsReducer from './projectsReducer';
import projectReducer from './projectReducer';

const reducer = combineReducers({
  projects: projectsReducer,
  project: projectReducer,
});

export default reducer;
