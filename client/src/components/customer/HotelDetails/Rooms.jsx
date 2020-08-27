import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const Rooms  = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const isCustomer = ( localStorage.getItem('isCustomer') === "true" );
  // console.log(props)
  const handleBook = (roomid) => {
    if(isCustomer){
      history.push(`/hotel-checkout/dom/checkout/${id}/${roomid}`)
    }
    else{
      history.push('/user/signin')
    }
  }
  return (
    <div className="boxCreate">
      <p>Rooms</p>
      { props.isRoomAvailable ? 
        props.rooms.map((list)=>(
          <div className="box-rooms">
          <p>{list.roomname}</p>
          <div style={{display: "flex"}}>
            <div style={{width: "200px", backgroundColor: "red", height: "160px"}}>
              <img 
                style={{width: "200px", height: "160px"}}
                src={list.imageUrl[0].url}
              />
            </div>
            <div style={{paddingLeft: "10px", width:"10%"}}>
              <p style={{fontSize: "12px", fontWeight:"600"}}>
                Max Guests
              </p>
              <div style={{marginTop: "-10px", fontSize:"14px"}}>
                <ul style={{listStyleType: "none", marginLeft: "-30px"}}>
                  <li>
                   {list.guestallowed}
                  </li>
                </ul>
              </div>
            </div>
            <div style={{marginLeft: "30px", width: "20%"}}>
              <p style={{fontSize: "12px", fontWeight:"600"}}>
                Inclusions
              </p>
              <div style={{marginTop: "-10px", fontSize:"12px"}}>
                <ul style={{listStyleType: "none", marginLeft: "-30px"}}>
                  {list.amenities.map((list) => (
                    <li>
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div style={{marginLeft: "15px", width: "18%" }}>
              <p style={{fontSize: "12px", fontWeight:"600"}}>
                Highlights
              </p>
              <div style={{marginTop: "-10px", fontSize:"12px"}}>
                <ul style={{listStyleType: "none", marginLeft: "-30px"}}>
                  <li>
                    Free Cancellation
                  </li>
                  <li>
                    Free Breakfast
                  </li>
                </ul>
              </div>
            </div>
            <div style={{marginLeft: "15px", width: "10%"}}>
              <p style={{fontSize: "12px", fontWeight:"600"}}>
                Price for 1 night
              </p>
              <div style={{marginTop: "-10px", fontSize:"30px", fontWeight: "700", textAlign: "right"}}>
                Rs.{list.roomcost}
              </div>
            </div>
            <div style={{marginLeft: "85px", width: "13%"}}>
              <span style={{color: "red", fontSize: "12px"}}>
                Only {list.availablerooms} Room Left!
              </span>
              <Button variant="contained" color="secondary" type="submit" style={{fontSize: "12px"}} onClick={() => handleBook(list._id)}>
                Book Room
              </Button>
            </div>
          </div>
        </div>
        ))
        :
        <span style={{marginLeft: "43%"}}>No Availability</span>
      }
    </div>
  )
};

const mappingStateToProps = ({detail}) => {
  return { 
    isRoomAvailable: detail.isRoomsAvailable
  };
};

export default connect(
  mappingStateToProps
)(Rooms);