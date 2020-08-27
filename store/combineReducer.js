import { combineReducers } from 'redux';
// Customer Reducer
import userReducer from './customer/auth/authreducer';
import searchReducer from './customer/search/searchreducer';
import detailsReducer from './customer/details/detailsreducer';
import bookingReducer from './customer/booking/bookingReducer';
// Business reducer
import hoteluserReducer from './business/auth/bauthReducer';
import bhomeReducer from './business/home/bhomeReducer';
import bbookingReducer from './business/booking/bookingReducer';

export default combineReducers({
  user: userReducer,
  search: searchReducer,
  detail: detailsReducer,
  booking: bookingReducer,
  hoteluser: hoteluserReducer,
  bhome: bhomeReducer,
  bookhotel: bbookingReducer
})