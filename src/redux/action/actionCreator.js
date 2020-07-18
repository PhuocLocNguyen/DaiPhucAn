import {actionType} from './actionTypes';
import axios from 'axios';
import EndpointFactory from 'axios-endpoints';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.4:4000',
});

const Endpoint = EndpointFactory(axiosInstance);

const projectEndPoint = new Endpoint('/project');

function fetchDataProjects() {
  return (dispatch) => {
    projectEndPoint
      .get()
      .then((reponse) => {
        const data = reponse.data;
        const {success, projects} = data;
        if (success && projects) {
          dispatch({type: actionType.FETCH_DATA_PROJECT, projects});
        }
      })
      .catch((error) => console.log(error.message));
  };
}

function fetchDataProjectFindByID(_id) {
  const projectFindByIDEndPoint = new Endpoint('/project/' + _id);
  return (dispatch) => {
    projectFindByIDEndPoint
      .get()
      .then((reponse) => {
        const data = reponse.data;
        const {success, project} = data;
        if (success && project) {
          dispatch({type: actionType.FIND_BY_ID, project});
        }
      })
      .catch((error) => console.log(error.message));
  };
}

export const actionCreator = {
  fetchDataProjects,
  fetchDataProjectFindByID,
};
