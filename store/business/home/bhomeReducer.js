const initialState = {
  message: '',
  reviews: [],
  bookings: [],
  rooms: [],
  isReview: false,
  isBookied: false,
  isRooms: false,
  isTokenVerified: ''
};

const bhomeReducer = (state = initialState, action) => {
  switch(action.type){
    case 'GET_HOME':
      console.log(action.payload.isTokenVerified)
      if(action.payload.isTokenVerified){
        if(action.payload.reviews.length != 0){
          action.payload.reviews.map(list => {
            state.reviews.push(list)
          })
          state.isReview = true;
        }
        if(action.payload.bookings.length != 0){
          action.payload.bookings.map(list => {
            state.bookings.push(list)
          })
          state.isBookied = true;
        }
        if(action.payload.rooms.length != 0){
          action.payload.rooms.map(list => {
            state.rooms.push(list)
          })
          state.isRooms = true;
        }
        sessionStorage.setItem('isTokenVerified', true)
        return {
          ...state, isTokenVerified: true, isHome: true
        }
      }
      else{
        state.isTokenVerified = action.payload.isTokenVerified
        sessionStorage.setItem('isTokenVerified', state.isTokenVerified)
        return {
          ...state, isHome: false
        }
      }
    case 'CREATE_ROOM':
      return state
    case 'GET_ROOM':
      sessionStorage.setItem('isRoomed', true)
      // console.log(action.payload.rooms.length)
      if(action.payload.rooms.length != 0){
        action.payload.rooms.map(list => {
          state.rooms.push(list)
        })
        state.isRooms = true;
      }
      else{
        state.isRooms = false;
      }
      return {
        ...state
      }
    case 'DELETE_ROOM':
      state.rooms = [];
      if(action.payload.rooms.length != 0){
        action.payload.rooms.map(list => {
          state.rooms.push(list)
        })
        state.isRooms = true;
      }
      else{
        state.isRooms = false;
      }
      return {
        ...state
      }
    default:
      return state
  }
};

export default bhomeReducer;