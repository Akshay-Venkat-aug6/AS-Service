import React from 'react';

const ReviewList = (props) => {
  console.log(props.reviews)
  return (
    <>
    {props.reviews ?
      <div className="boxCreate">
        {props.reviews.length ? 
          props.reviews.map((list) => (
          <>
            <div className="review">
              <div className="reviewer-img">
                <span>
                  A
                </span>
              </div>
              <div className="reviews">
                <span>
                  {list.username}
                </span>
                <br/>
                <div className="comments">
                  {list.reviews}
                </div>
              </div>
            </div>
            <hr />
          </>
          )) :
          <div style={{textAlign: "center"}}>
            No Reviews Available
          </div>
        }
      </div>:
      <div className="boxCreate">
        <div style={{textAlign: "center"}}>
          No Reviews Available
        </div>
      </div>
    }
      
    </>
  )
};

export default ReviewList;