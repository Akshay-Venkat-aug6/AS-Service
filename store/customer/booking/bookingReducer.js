const initialState = {
  rooms: [],
  message: '',
  isBooked: '',
  details: '',
  clientToken: '',
  success: '',
  isPaymentCompleted: ''
};

const bookingReducer = (state = initialState, action) => {
  switch(action.type){
    case 'CHECK_AVAILABILITY':
      if(action.type.rooms){
        action.type.rooms.map((rooms) => {
          state.rooms.push(rooms)
        })
      }
      else{
        state.message = 'No Rooms Available'
      }
      return {
        ...state
      }
    case 'CHECKOUT_ROOM':
      return {
        ...state,
        details: action.payload.result,
        isBooked: action.payload.isBooking
      }
    case 'GET_BRAINTREE_TOKEN':
      return {
        ...state, 
        clientToken: action.payload.clientToken,
        success: action.payload.success
      }
    case 'PROCESS_PAYMENT':
      console.log(action.payload.success)
      return {
        ...state,
        globalId: action.payload.globalId,
        isPaymentCompleted: action.payload.success
      }
    default:
      return state
  }
};

export default bookingReducer;