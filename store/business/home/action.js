import { businessHome, createRoom, getRoom, deleteRoom } from '../../../api/api';

export const GET_HOME = (data) => (dispatch) => {
  return(
    businessHome()
      .then(
        response => {
          console.log(response)
          dispatch({
            type: "GET_HOME",
            payload: {
              reviews: response.data.review,
              bookings: response.data.booking,
              rooms: response.data.rooms,
              isTokenVerified: response.data.isTokenVerified
            }
          })
        }
      )
  )
}

export const CREATE_ROOM = (data) => (dispatch) => {
  return(
    createRoom(data)
      .then(
        response => {
          console.log(response)
          dispatch({
            type: "CREATE_ROOM",
            payload: {
              message: response.data.message
            }
          })
        }
      )
  )
}

export const GET_ROOM = (data) => (dispatch) => {
  return(
    getRoom(data)
      .then(
        response => {
          console.log(response)
          dispatch({
            type: "GET_ROOM",
            payload: {
              rooms: response.data.rooms
            }
          })
        }
      )
  )
}

export const DELETE_ROOM = (data) => (dispatch) => {
  return(
    deleteRoom(data)
      .then(
        response => {
          console.log(response)
          dispatch({
            type: "DELETE_ROOM",
            payload: {
              rooms: response.data.rooms
            }
          })
        }
      )
  )
}