import {  checkAvailability, checkOut, geBraintreeClientToken, processPayment } from '../../../api/api';

export const CHECK_AVAILABILITY = (data) => (dispatch) => {
  return checkAvailability(data)
      .then(
        response => {
          dispatch({
            type: "CHECK_AVAILABILITY",
            payload: {
              rooms: response.data.rooms
            }
          })
        }
      )
};

export const CHECKOUT_ROOM = (data) => (dispatch) => {
  return checkOut(data)
      .then(
        response => {
          console.log(response.data)
          dispatch({
            type: "CHECKOUT_ROOM",
            payload: {
              result: response.data.result,
              isBooking: response.data.isBooking
            }
          })
        }
      )
};

export const GET_BRAINTREE_TOKEN = () => dispatch => {
  return geBraintreeClientToken()
          .then(
            response => {
              dispatch({
                type: "GET_BRAINTREE_TOKEN",
                payload: {
                  clientToken: response.data.clientToken,
                  success: response.data.success
                }
              })
            }
          )
}

export const PROCESS_PAYMENT = (data) => dispatch => {
  return processPayment(data)
          .then(
            response => {
              
              dispatch({
                type: "PROCESS_PAYMENT",
                payload: {
                  globalId: response.data.transaction.globalId,
                  success: response.data.success
                }
              })
            }
          )
}
