import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { connect } from 'react-redux';

const Hoteladdress = (props) => {
  return (
    <div className="w8">
      <div className="flex-d flex-wrap-dir">
        <div className="flex-d">
          <p className="hotel-name">
            {props.name}
          </p>
          &nbsp;&nbsp;&nbsp;
          <div className="rating">
            <Rating name="half-rating-read" value={props.rating} precision={0.5} readOnly />
          </div>
        </div>
        <span style={{marginTop: "-20px", color: "#666", paddingTop: "5px"}}>
          {props.address}
        </span>  
      </div>
    </div>
  )
};

const mappingStateToProps = state => {
  return { 
    name:state.detail.hotelname,
    rating: state.detail.rating,
    address: state.detail.address
  };
};

export default connect(
  mappingStateToProps
)(Hoteladdress);
