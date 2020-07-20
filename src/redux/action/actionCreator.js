import {actionType} from './actionTypes';
import axios from 'axios';
import EndpointFactory from 'axios-endpoints';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.4:4000',
});

const Endpoint = EndpointFactory(axiosInstance);

function fetchDataProjects() {
  const projectEndPoint = new Endpoint('/project');
  return (dispatch) => {
    projectEndPoint
      .get()
      .then((reponse) => {
        const data = reponse.data;
        const {success, projects} = data;
        // console.log(projects[1]._id);
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
          dispatch({type: actionType.FIND_BY_ID_PROJECT, project});
        }
      })
      .catch((error) => console.log(error.message));
  };
}
//----counselor-------------
function fetchDataCounselors() {
  const projectEndPoint = new Endpoint('/counselor');
  return (dispatch) => {
    projectEndPoint
      .get()
      .then((reponse) => {
        const data = reponse.data;
        const {success, counselors} = data;
        if (success && counselors) {
          dispatch({type: actionType.FETCH_DATA_COUNSELOR, counselors});
        }
      })
      .catch((error) => console.log(error.message));
  };
}

function fetchDataCounselorFindByID(_id) {
  const counselorFindByIDEndPoint = new Endpoint('/counselor/' + _id);
  return (dispatch) => {
    counselorFindByIDEndPoint
      .get()
      .then((reponse) => {
        const data = reponse.data;
        const {success, counselor} = data;
        if (success && counselor) {
          dispatch({type: actionType.FIND_BY_ID_COUNSELOR, counselor});
        }
      })
      .catch((error) => console.log(error.message));
  };
}
//----news-------------
function fetchDataNews() {
  const newsEndPoint = new Endpoint('/news');
  return (dispatch) => {
    newsEndPoint
      .get()
      .then((reponse) => {
        const data = reponse.data;
        const {success, news} = data;
        if (success && news) {
          dispatch({type: actionType.FETCH_DATA_NEWS, listNews: news});
        }
      })
      .catch((error) => console.log(error.message));
  };
}

function fetchDataNewsFindByID(_id) {
  const newsFindByIDEndPoint = new Endpoint('/news/' + _id);
  return (dispatch) => {
    newsFindByIDEndPoint
      .get()
      .then((reponse) => {
        const data = reponse.data;
        const {success, news} = data;
        if (success && news) {
          dispatch({type: actionType.FIND_BY_ID_NEWS, news});
        }
      })
      .catch((error) => console.log(error.message));
  };
}
export const actionCreator = {
  fetchDataProjects,
  fetchDataProjectFindByID,
  fetchDataCounselors,
  fetchDataCounselorFindByID,
  fetchDataNews,
  fetchDataNewsFindByID,
};
