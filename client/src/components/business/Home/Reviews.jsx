import React from 'react';
import {Card, Button} from 'react-bootstrap';

const Reviews = (props) => {
  // const isReview = true;
  return(
    <div className="b-box w-70 ml-15 mt-5">
      <div className="p-5">
        <div>
          <div>
            <p className="display-inlineBlock" style={{fontWeight: "700"}}>Lastest Reviews</p>
            <span className="display-inlineBlock float-right font_sm cursor">
              Show More
            </span>
            <hr className="rooms-hr"/>
          </div>
          
            {props.isReview ? 
              <div style={{overflowY: "scroll", height: "230px"}} id="style-1">
                <div className="flex-wrap">
                  {props.reviews.map(list => (
                    <Card className="card-box" style={{width: "50rem"}}>
                      <Card.Body>
                        <Card.Title className="display-inlineBlock">
                          {list.personname}
                        </Card.Title>
                        <Card.Title className="display-inlineBlock float_right cursor">View</Card.Title>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
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

export default Reviews;