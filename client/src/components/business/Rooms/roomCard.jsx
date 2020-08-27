import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { DELETE_ROOM } from '../../../store/business/home/action';
import { bindActionCreators } from "redux";

const RoomCard = (props) => {
  console.log(props.rooms)
  
  const handleDelete = (id) => {
    // console.log(id)
    props.DELETE_ROOM({id: id})
    window.location.reload(false)
  }

  return (
    <>
    {props.isRooms ?
      props.rooms.map((list) => (
        
        <Card className="mt-3">
          <Card.Body>
            <div className="flex">
              <div style={{width: "30%", backgroundColor: "red"}}>
                <Card.Img variant="top" height="200" src={list.imageUrl[0].url} />
              </div>
              <div className="ml-3">
                <div>
                  <h4>{list.roomname}</h4>
                  <div className="flex">
                    <p>
                      <span>Room Type: </span>
                      <span>{list.roomtype}</span>
                    </p>
                    <p className="ml-5">
                      <span>No of Rooms : </span>
                      <span>{list.rooms}</span>
                    </p>
                  </div>
                  <div className="flex">
                    <p>
                      <span>Guest Allowed: </span>
                      <span>{list.guestallowed}</span>
                    </p>
                    <p className="ml-5">
                      <span>Price: </span>
                      <span>Rs.{list.roomcost}</span>
                    </p>
                  </div>
                  <div className="flex">
                    <p>
                      <span>Amentites: </span>
                      {list.amenities.map((list) => (
                        <span style={{marginLeft: "5px"}}>{list}</span>
                      ))}
                      
                    </p>
                  </div>

                  <div className="flex">
                    {/* <div>
                      <Button variant="warning">
                        Update
                      </Button>
                    </div> */}
                    <div className="ml-3">
                      <Button variant="danger" onClick={(id) => handleDelete(list._id)}>
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))
      :
        "No Rooms"
      }
    </>
  )
};

const mappingStateToProps = ({state}) => {
  return { state: state };
};

const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ DELETE_ROOM }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(RoomCard);