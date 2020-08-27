const initialState = {
  booking: [],
  isBooking: ''
}

const bookingReducer = (state = initialState, action) => {
  switch(action.type){
    case 'GET_BOOKING':
      if(action.payload.isBooking){
        action.payload.booking.map((booklist) => {
          state.booking.push(booklist)
        })
      }
      return {
        ...state,
        isBooking: action.payload.isBooking
      }
    default:
      return state 
  }
};

export default bookingReducer