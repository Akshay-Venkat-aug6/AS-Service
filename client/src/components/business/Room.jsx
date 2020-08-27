import React, { useEffect } from 'react';
import CreateRoom from './Rooms/createRoom';
import RoomCard from './Rooms/roomCard';
import { connect } from 'react-redux';
import { GET_ROOM } from '../../store/business/home/action';
import { bindActionCreators } from "redux";
import Loading from '.././customer/Loading';

const Room = (props) => {
  console.log(props.rooms)
  useEffect(() => {
    props.GET_ROOM()
  })

  return(
    <div>
      <CreateRoom />
      <div className = "ml-15 mt-5 b-box p-5 w-70">
        {sessionStorage.getItem('isRoomed') ?
        <RoomCard rooms={props.rooms} isRooms={props.isRooms}/> :
        "No Rooms Created"
      }
      </div>
    </div>
  )
};

const mappingStateToProps = ({bhome}) => {
  return { 
    rooms: bhome.rooms,
    isRooms: bhome.isRooms
  };
};

const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ GET_ROOM }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(Room);