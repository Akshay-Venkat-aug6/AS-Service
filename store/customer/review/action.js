import { addreview } from '../../../api/api';

export const ADD_REVIEW = (data) => (dispatch) => {
  return addreview(data)
          .then(response => {
            console.log(response)
            dispatch({
              type:"ADD_REVIEW",
              payload: {
                isReviewed: response.data.isReviewed
              }
            })
          })
}