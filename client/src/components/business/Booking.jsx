import React from 'react';
import { Card  } from 'react-bootstrap';

const Booking = (props) => {
  return(
    <>
    { props.isBooking ?
      props.booking.map((booklist) => (
        <Card className="card-box ml-4 mt-4" style={{width: "55rem"}}>
          <Card.Body>
            <Card.Title className="display-inlineBlock">
                <div>
                  <p>
                    Name, Address
                  </p>
                  <div className="flex">
                    <p>
                      <span>No of Persons: </span>
                      <span>2</span>
                    </p>
                    <p className="ml-4">
                      <span>Rooms: </span>
                      <span>2</span>
                    </p>
                  </div>
                  <div className="flex">
                    <div className="font_sm">
                      <p>Check In</p>
                      <span>2019</span>
                    </div>
                    <div className="ml-4 font_sm">
                      <p>Check Out</p>
                      <span>2019</span>
                    </div>
                  </div>
                </div>
            </Card.Title>
          </Card.Body>
        </Card>
      ))
    :
      "No Booking is Done"
    }
    </>
  )
};

export default Booking;