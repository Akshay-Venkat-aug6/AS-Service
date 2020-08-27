const initialState = {
  isReviewd: ''
}

const detailsReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_REVIEW':
      return {
        ...state
      }
    default:
      return state
  }
};

export default detailsReducer