import React from 'react';
import Header from '../../components/business/Header';
import Booking from '../../components/business/Booking';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { GET_BOOKING } from '../../store/business/booking/action';
import { bindActionCreators } from "redux";
import { useEffect } from 'react';

const BookingPage = (props) => {
  const history = useHistory();
  const isBusiness = ( localStorage.getItem('isBusiness') === 'true' )
  useEffect(() => {
    props.GET_BOOKING()
  });
  console.log(props.isBooking)
  return(
    <>
      { isBusiness ? 
        <div>
          <Header />
          <div className="b-box w-70 ml-15 mt-5"  >
            <div style={{overflowY: "scroll", height: "400px"}} id="style-1">
              <Booking isBooking={props.isBooking} booking={props.booking}/>
            </div>
          </div>
        </div>
        :
        history.push('/business/b2as')
      }
      
    </>
  )
};

const mappingStateToProps = ({booking}) => {
  return { 
    isBooking: booking.isBooking,
    booking: booking.booking
  };
};

const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ GET_BOOKING }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(BookingPage);