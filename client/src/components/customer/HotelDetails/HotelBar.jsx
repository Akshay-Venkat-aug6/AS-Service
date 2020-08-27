import React from 'react';
import Hoteladdress from './Hoteladdress';
import HotelPrice from './HotelPrice';

const HotelBar = () => {
  return (
    <div className="flex-d">
      <Hoteladdress />
      <HotelPrice />
    </div>
  )
};

export default HotelBar