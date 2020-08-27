import React from 'react';
import { Carousel } from 'react-bootstrap';

const HotelGallery = () => {
  return (
    <div className="boxCreate">
      <h3>Hotel Gallery</h3>
      <div style={{paddingTop: "20px"}}>
        <Carousel>
          <Carousel.Item>
            <img
              // className="d-block w-100"
              width= "1100"
              height = "600"
              src="https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1445581579/Domestic%20Hotels/Hotels_Goa/Whispering%20Palms%20Beach%20Resort/wpbr.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width= "1100"
              height = "600"
              // className="d-block w-100"
              src="https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1467527257/Domestic%20Hotels/Hotels_Goa/Whispering%20Palms%20Beach%20Resort/Classic%20%20-%20Unltd%20Alchol%2011am%20-%2011pm/Classic__-_Unltd_Alchol_11am_-_11pm_StEwGe.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
};

export default HotelGallery