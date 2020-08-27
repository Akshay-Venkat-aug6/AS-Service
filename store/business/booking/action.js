import { getBooking } from '../../../api/api';


export const GET_BOOKING = (data) => (dispatch) => {
  return(
    getBooking(data)
      .then(
        response => {
          console.log(response.data)
          dispatch({
            type: "GET_BOOKING",
            payload: {
              booking: response.data.booking,
              isBooking: response.data.isBooking
            }
          })
        }
      )
  )
}