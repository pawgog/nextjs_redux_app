import {
  FETCH_INFO_PENDING,
  FETCH_INFO_SUCCESS,
  FETCH_INFO_ERROR,
  ADD_INFO,
  DELETE_INFO,
} from './actions';

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_INFO_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_INFO_SUCCESS:
      return {
        ...state,
        pending: false,
        info: action.payload,
      };
    case FETCH_INFO_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case ADD_INFO:
      return {
        ...state,
        info: [...state, action.payload],
      };
    case DELETE_INFO:
      return {
        ...state,
        info: state.info.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;

export const getInfo = (state) => state.info;
export const getInfoPending = (state) => state.pending;
export const getInfoError = (state) => state.error;
