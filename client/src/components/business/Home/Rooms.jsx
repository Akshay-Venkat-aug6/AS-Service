import React from 'react';
import {Card, Button} from 'react-bootstrap';

const Rooms = (props) => {
  console.log(props.rooms)
  return(
    <div className="b-box w-70 ml-15 mt-5">
      <div className="p-5">
        <div>
          <div>
            <p className="display-inlineBlock" style={{fontWeight: "700"}}>Rooms</p>
            <span className="display-inlineBlock float-right font_sm cursor">
              Show More
            </span>
            <hr className="rooms-hr"/>
          </div>
          {props.isRooms ? 
            <div className="flex flex-wrap">
              { props.rooms.map(list => (
                <Card className="card-box">
                  <Card.Img variant="top" src={list.img} />
                  <Card.Body>
                    <Card.Title>
                      <div>
                        <p>{list.roomname}</p>
                        <span style={{fontSize: "14px"}}>Price:  {list.roomcost}</span>
                        <p style={{fontSize: "14px"}}>Guest Allowed:  {list.guestallowed}</p>
                        <p style={{fontSize: "14px"}}>Room Type:  {list.roomtype}</p>
                      </div>
                    </Card.Title>
                  </Card.Body>
                </Card>
               ))}
            </div>
            :
            <div className="b-title" style={{marginTop: "50px"}}>
              No Rooms Added
            </div>
          }
        </div>
      </div>
    </div>
  )
};

export default Rooms;