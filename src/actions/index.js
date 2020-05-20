import axios from 'axios';

export const FETCH_INFO_PENDING = 'FETCH_INFO_PENDING';
export const FETCH_INFO_SUCCESS = 'FETCH_INFO_SUCCESS';
export const FETCH_INFO_ERROR = 'FETCH_INFO_ERROR';
export const ADD_INFO = 'ADD_INFO';
export const DELETE_INFO = 'DELETE_INFO';

export const fetchInfo = () => {
  return (dispatch) => {
    dispatch(fetchInfoPending());
    axios
      .get('http://localhost:4001/info')
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
  return (dispatch) => {
    axios
      .post('http://localhost:4001/info', info)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        return res.data;
      })
      .then((res) => {
        dispatch(addInfoSuccess(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteInfoAction = (id) => {
  axios
    .delete('http://localhost:4001/info/' + id)
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
    type: DELETE_INFO,
    payload: id,
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

function addInfoSuccess(info) {
  return {
    type: ADD_INFO,
    payload: info,
  };
}
