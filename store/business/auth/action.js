import { registerHotelDetails, businesscheckOtp, loginHotel, logoutHotel } from '../../../api/api';

export const REGISTER_HOTEL = (data) => (dispatch) => {
  return(
    registerHotelDetails(data)
      .then(
        response => {
          dispatch({
            type: "REGISTER_HOTEL",
            payload: {
              message: response.data.message,
              id: response.data.id,
              isRegistered: response.data.isRegisteredw
            }
          })
        }
      )
  )
}

export const CHECK_OTP = (data) => (dispatch) => {
  return (
    businesscheckOtp(data)
      .then(
        response => {
          dispatch({
            type: "CHECK_OTP",
            payload: {
              checkOtp: response.data.checkOtp,
              isChecked: response.data.isChecked,
              token: response.data.token,
              isBusiness: response.data.isBusiness
            }
          })
        }
      )
  )
}

export const LOGIN_HOTEL = (data) => (dispatch) => {
  return (
    loginHotel(data)
      .then(
        response => {
          console.log(response)
          dispatch({
            type: "LOGIN_HOTEL",
            payload: {
              token: response.data.token,
              isValid: response.data.isValid,
              isBusiness: response.data.isBusiness,
              message: response.data.message
            }
          })
        }
      )
  )
}

export const LOGOUT_HOTEL = (data) => (dispatch) => {
  return (
    logoutHotel(data)
      .then(
        response => {
          console.log(response)
          dispatch({
            type: "LOGOUT_HOTEL",
            payload: {
              isLogout: response.data.isLogout
            }
          })
        }
      )
  )
}