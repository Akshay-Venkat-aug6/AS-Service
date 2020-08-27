import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Booking = (props) => {
  return(
    <div className="b-box w-70 ml-15 mt-5 mb-5">
      <div className="p-5">
        <div>
          <div>
            <p className="display-inlineBlock" style={{fontWeight: "700"}}>Lastest Booking</p>
            <span className="display-inlineBlock float-right font_sm cursor">
              Show More
            </span>
            <hr className="rooms-hr"/>
          </div>
            {props.isBookied ? 
              <div style={{overflowY: "scroll", height: "230px"}} id="style-1">
                <div className="flex flex-wrap">
                  {props.bookings.map(list => (
                    <Card className="card-box">
                    <Card.Body>
                      <Card.Title className="">
                        <div>
                          <p>{list.name}</p>
                          <div>
                            <span className="font_10">
                              Rooms: 
                            </span>
                            <span className="font_10">
                              {list.rooms}
                            </span>
                          </div>
                          <div>
                            <span className="font_10">
                              Persons: 
                            </span>
                            <span className="font_10">
                              {list.persons}
                            </span>
                          </div>
                          <br />
                          <div className="font_sm">
                            <span className="display-inlineBlock">
                              CheckIn
                            </span>
                            <span className="display-inlineBlock float-right">
                              CheckOut
                            </span>
                          </div>
                          <div className="font_sm mt-2">
                            <span className="display-inlineBlock">
                              {list.checkIn}
                            </span>
                            <span className="display-inlineBlock float-right">
                              {list.checkOut }
                            </span>
                          </div>
                        </div>
                      </Card.Title>
                      <div className="b-title">
                        <Button>
                          View
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                  ))}
                </div>
              </div>
              :
              <div className="b-title" style={{marginTop: "50px"}}>
                No Booking
              </div>
            }
        </div>
      </div>
    </div>
  )
};

export default Booking