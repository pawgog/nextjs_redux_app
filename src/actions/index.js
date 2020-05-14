import axios from 'axios';

export const FETCH_INFO_PENDING = 'FETCH_INFO_PENDING';
export const FETCH_INFO_SUCCESS = 'FETCH_INFO_SUCCESS';
export const FETCH_INFO_ERROR = 'FETCH_INFO_ERROR';
export const ADD_INFO = 'ADD_INFO';

export const fetchInfo = () => {
  return (dispatch) => {
    dispatch(fetchInfoPending());
    axios
      .get('http://localhost:4001/')
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchInfoSuccess(res.data));
        return res.data;
      })
      .catch((err) => {
        dispatch(fetchInfoError(err));
      });
  };
};

export const addInfo = (info) => {
  axios
    .post('http://localhost:4001/info', info)
    .then((res) => {
      if (res.error) {
        throw res.error;
      }
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    type: ADD_INFO,
    payload: {
      item: {
        id: '',
        ...info,
      },
    },
  };
};

function fetchInfoPending() {
  return {
    type: FETCH_INFO_PENDING,
  };
}

function fetchInfoSuccess(info) {
  return {
    type: FETCH_INFO_SUCCESS,
    payload: info,
  };
}

function fetchInfoError(error) {
  return {
    type: FETCH_INFO_ERROR,
    error: error,
  };
}

function addInfoSuccess(newInfo) {
  return {
    type: ADD_INFO,
    payload: newInfo,
  };
}
