const reducer = (state=[], action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          usersTable: [...state.usersTable, action.name],
        }
      default:
        return state
    }
  }

export default reducer;