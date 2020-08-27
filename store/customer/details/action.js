import { getHoteldetails, getprofile, updateProfile } from '../../../api/api';

export const GET_DETAILS = (data) => (dispatch) => {
  return getHoteldetails(data)
          .then(response => {
            dispatch({
              type:"GET_HOTELDETAILS",
              payload: {
                details: response.data.details,
                review: response.data.review,
                rooms: response.data.rooms,
                isAvailable: response.data.isAvailable,
                isUserBooked: response.data.isUserBooked,
                username: response.data.username
              }
            })
          })
}

export const GET_PROFILE = (data) => (dispatch) => {
  return getprofile(data)
          .then(response => {
            dispatch({
              type:"GET_PROFILE",
              payload: {
                profile: response.data.profile,
                isProfile: response.data.isProfile
              }
            })
          })
}

export const UPDATE_PROFILE = (data) => (dispatch) => {
  return updateProfile(data)
          .then(response => {
            dispatch({
              type:"UPDATE_PROFILE",
              payload: {
                isUpdated: response.data.isUpdated
              }
            })
          })
}