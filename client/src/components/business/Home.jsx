import React, { useEffect } from 'react';
import Rooms from './Home/Rooms';
import Reviews from './Home/Reviews';
import Booking from './Home/Booking';
import { connect } from 'react-redux';
import { GET_HOME } from '../../store/business/home/action';
import { bindActionCreators } from "redux";
import { useHistory } from 'react-router-dom';
import Loading from '../../components/customer/Loading';


const Home = (props) => {
  const history = useHistory();
  const isTokenVerified = (sessionStorage.getItem('isTokenVerified') === 'true');

  useEffect(() => {
    props.GET_HOME()
  })
  console.log(props.isTokenVerified)
  return (
    <>
      {localStorage.getItem('token')? 
        <>
          {isTokenVerified ?
            <>
              <Rooms rooms={props.rooms} isRooms={props.isRooms}/>
              <Reviews reviews={props.reivews} isReview={props.isReview}/>
              <Booking bookings={props.bookings} isBookied={props.isBookied}/>
            </>
            :
            <Loading />
          }
          
        </>
      :
        history.push('/business/b2as')
      }
    </>
  )
};

const mappingStateToProps = ({bhome}) => {
  return { 
    reivews: bhome.reviews,
    bookings: bhome.bookings,
    rooms: bhome.rooms,
    isReview: bhome.isReview,
    isBookied: bhome.isBookied,
    isRooms: bhome.isRooms,
    isTokenVerified: bhome.isTokenVerified
  };
};

const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ GET_HOME }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(Home);