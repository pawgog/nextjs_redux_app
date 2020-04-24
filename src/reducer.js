import { GET_INFO, ADD_INFO } from './actions';

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INFO':
      return {
        ...state,
        usersTable: [...state.usersTable, action.name],
      };
    default:
      return state;
  }
};

export default reducer;
