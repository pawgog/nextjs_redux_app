import axios from 'axios';

export const GET_INFO = 'GET_INFO';
export const ADD_INFO = 'ADD_INFO';

export const getInfo = () => (dispatch) => {
  dispatch({ type: GET_INFO });

  return axios
    .get('http://localhost:4001/', {})
    .then(({ data }) => {
      console.log(data);
      dispatch({
        type: GET_INFO,
        payload: {
          data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addInfo = (info) => {
  return {
    type: 'ADD_INFO',
    payload: {
      item: {
        id: '',
        ...info,
      },
    },
  };
};
