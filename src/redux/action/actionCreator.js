import {actionType} from './actionTypes';
import axios from 'axios';
import EndpointFactory from 'axios-endpoints';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.4:4000',
});

const Endpoint = EndpointFactory(axiosInstance);

const wordEndPoint = new Endpoint('/project');

function fetchDataProjects() {
  return (dispatch) => {
    wordEndPoint
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

export const actionCreator = {
  fetchDataProjects,
};
