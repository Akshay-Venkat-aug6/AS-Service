import React from 'react';
import Rating from '@material-ui/lab/Rating';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const HotelList = (props) => {
  const history = useHistory();
  const handleChoose = () => {
    history.push('/hotel-search/dom/details')
  }
  
  return (
    <>
      {props.hotelslist.map((list) => (
        <div className="hotel-card p-1">
          <div className="hotel-card-img">
            <img 
              alt="img-gallery" 
              src={list.imageUrl[0].url}
            />
          </div>
          <div className="hotel-car-details">
            <div className="name">
              {list.companyname}
            </div>
            <div className="flex-d">
              <div className="rating">
                <Rating name="half-rating-read" value={list.rating} precision={0.5} readOnly />
              </div>
              <span style={{paddingLeft: "10px", fontSize: "10px", paddingTop: "4px"}}>
                <LocationOnIcon style={{fontSize: "18px", color: "grey"}}/>
                &nbsp;{list.city}, {list.state}
              </span>
            </div>
            <div className="amenities">
              {list.amenities.map((list) => (
                list ?
                <div className="amenities-icons ml-3">
                  <CheckCircleOutlineOutlinedIcon className="icons"/>
                  &nbsp;{list}
                </div>
                : ""
              ))}
            </div>
          </div>
          <div className="hotel-price">
            <div>
              <p className="hotel-price-p">
                Rs.{list.price}
              </p>
              <div className="hotel-price-div">For 1 Night</div>
            </div>
            <div className="hotel-price-button">
            <Button variant="contained" color="secondary" type="submit" onClick={()=>{ sessionStorage.setItem('rating', '');history.push('/hotel-search/dom/details/'+list._id)}} >
              Choose Room
            </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
};

export default HotelList;