import React from 'react';
import Header from '../../../components/customer/Normal/Header';
import HotelDetails from '../../../components/customer/Normal/HotelDetails';

const HotelDetailsPage = () => {
  return (
    <div>
      <Header />
      <div style={{paddingLeft: "100px", paddingRight: "100px", paddingTop: "70px"}}>
        <HotelDetails />
      </div>
    </div>
  )
};

export default HotelDetailsPage