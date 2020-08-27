const initialState = {
  message: '',
  id: '',
  isChecked: '',
  checkOtp: '',
  token: '',
  isRegistered: true,
  isBusiness: ''
};

const hotelReducer = (state = initialState, action) => {
  switch(action.type){
    case 'REGISTER_HOTEL':
      sessionStorage.setItem('Error', action.payload.message)
      return { ...state, message: action.payload.message, id: action.payload.id, isRegistered: action.payload.isRegistered }
    case 'CHECK_OTP':
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('isBusiness', action.payload.isBusiness)
      return { ...state, isChecked: action.payload.isChecked, checkOtp: action.payload.checkOtp, token: action.payload.token }
    case 'LOGIN_HOTEL':
      if(action.payload.token){
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('isBusiness', action.payload.isBusiness)
      }
      state.message = action.payload.message;
      // console.log(state.message)
      sessionStorage.setItem('isValid', action.payload.isValid)
      return { ...state, 
        isBusiness: action.payload.isBusiness ,
        token: action.payload.token, 
        isChecked: action.payload.isValid 
      }
    
    case 'LOGOUT_HOTEL':
      console.log('Logout')
      localStorage.setItem('token', '')
      localStorage.setItem('isBusiness', '')
      return state

    default:
      return state
  }
};

export default hotelReducer;