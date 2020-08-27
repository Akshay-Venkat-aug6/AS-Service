import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { ScrollTo } from "react-scroll-to";

const HotelPrice = (props) => {
  return (
    <div className="flex-d flex-wrap-dir" style={{width: "10%"}}>
      <div >
        <p className="hotel-details-price-p">Rs.{props.price}</p>
      </div>
      <div style={{marginTop: "-20px", color: "#666", paddingTop: "5px"}}>
        <ScrollTo>
          {({ scroll }) => (
            // <a onClick={() => scroll({ x: 20, y: 500, , smooth: true })}>Scroll to Bottom</a>
            <Button  variant="contained" color="secondary" type="submit"  onClick={() => scroll({ x: 20, y: 1000, smooth: true })}  style={{fontSize: "10px"}}>
              Choose Room
            </Button>
          )}
        </ScrollTo>
        
      </div>
    </div>
  )
};

const mappingStateToProps = state => {
  return { 
    price:state.detail.price
  };
};

export default connect(
  mappingStateToProps
)(HotelPrice);