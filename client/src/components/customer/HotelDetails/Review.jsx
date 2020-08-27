import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { ADD_REVIEW } from '../../../store/customer/review/action';
import { bindActionCreators } from "redux";
import { useParams } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';

const Review = (props) => {
  const { id } = useParams();
  const [value, setValue] = React.useState(0);

  var isTrueSet = (localStorage.getItem('isCustomer') === 'true');
  const [review, setReview] = useState('');
  console.log(props.isUserBooked)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    let reviewData = {
      hotelid: id,
      review: review,
      username: props.username,
      userrating: value
    }
    
    props.ADD_REVIEW(reviewData)
    window.location.reload(true)
  }

  return (
    <div className="boxCreate">
      {isTrueSet?
        props.isUserBooked ? 
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>{props.username}</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Enter the Reviews........" 
              onChange={(e) => {setReview(e.target.value)}}
            />
            <div className="mt-3">
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
          </Form.Group>
          {review ?
            <Button variant="contained" color="secondary" type="Submit">
              Submit
            </Button>

            :
            <Button variant="contained" color="secondary" type="Submit" disabled>
              Submit
            </Button>
          }
          
        </Form> : <span style={{marginLeft: "40%"}}>Book the Hotel to Give Review</span>
        : <span style={{marginLeft: "40%"}}>Login to Give Review</span>
      }
    </div>
  )
};

const mappingStateToProps = ({detail}) => {
  return { 
    isUserBooked: detail.isUserBooked,
    username: detail.username
  };
};


const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ ADD_REVIEW }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(Review);