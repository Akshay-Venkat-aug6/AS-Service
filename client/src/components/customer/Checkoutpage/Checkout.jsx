import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { CHECKOUT_ROOM, GET_BRAINTREE_TOKEN, PROCESS_PAYMENT } from '../../../store/customer/booking/action';
import { bindActionCreators } from "redux";
import { useParams, useHistory } from 'react-router-dom';
import DropIn from "braintree-web-drop-in-react";

const Checkout = (props) => {
  const { hotelid, roomid } = useParams();
  const [instance, setInstance] = useState('');
  const checkOut = sessionStorage.getItem('checkOut').split('-')[2]
  const checkin = sessionStorage.getItem('checkIn').split('-')[2]
  const history = useHistory();
  
  useEffect(() => {
    let id = {
      hotelid: hotelid,
      roomid: roomid
    }
    props.CHECKOUT_ROOM(id)
    props.GET_BRAINTREE_TOKEN()
    console.log(props)
  }, [])
  
  const payment = async () => {
    let nonce;
    let getNonce = await instance.requestPaymentMethod();
    nonce = getNonce.nonce
    let paymentData = {
      paymentMethodNonce : nonce,
      amount: props.details.totalPrice,
      checkIn: sessionStorage.getItem('checkIn'),
      checkOut: sessionStorage.getItem('checkOut'),
      roomid: roomid,
      hotelid: hotelid,
      persons: '1',
      rooms: '1',
      price: props.details.totalPrice
    }
    console.log(paymentData)
    props.PROCESS_PAYMENT(paymentData)
  }

  return (
    <>
    {props.isBooked ?
      <div className="checkout-box">
        <div className="flex-d">
          <div className="review-booking">
            <h3 className="box-title grad">
              Review Your Booking
            </h3>
            <div className="box-content  itin-htl-padd itinerary">
              <div className="disp-table">
                <div className="disp-table-cell pr itin-img-wrap text-center wid-162">
                  <div className="ovf-hidden">
                    <img className="itin-img" ng-src="https://imgcld.yatra.com/ytimages/image/upload/t_hotel_srplist/v1501845663/Hotel/Goa/00001053/Studio_Suite_Room_-_All_Meals_ouHLfD.jpg" onerror="angular.element(this).scope().setErrorImg(event)" src="https://imgcld.yatra.com/ytimages/image/upload/t_hotel_srplist/v1501845663/Hotel/Goa/00001053/Studio_Suite_Room_-_All_Meals_ouHLfD.jpg" />
                  </div>
                </div>
                <div className="disp-table-cell" style={{float: "left"}}>
                  <div>
                    <h3>
                      <span className="fs-18 gray-dark text-truncate">{props.details.hotelname}</span>
                      <span className="fl ml10 rating-bg">
                        <Rating name="half-rating-read" defaultValue={props.details.rating} precision={0.5} readOnly />
                      </span>
                      <div className="gray-light fs-base normal address-txt">
                          <span >{props.details.address}
                          </span>
                      </div>
                    </h3>

                    <div class="disp-table mt20">
                      <div class="disp-table-cell stay-dates">
                          <div class="cal-block">
                              <div class="cb-top">
                                  <span class="checkin-text">Check-In</span>
                                  <span class="bold bkg-date">{checkin}</span>
                              </div>
                              <div class="cb-footer">
                                      Aug &nbsp;|&nbsp;&nbsp; 1:00 PM
                              </div>
                          </div>
                            <div class="cal-block">
                              <div class="cb-top">
                                  <span class="checkin-text">Check-Out</span>
                                  <span class="bold bkg-date">{checkOut}</span>
                              </div>
                              <div class="cb-footer">
                                      Aug &nbsp;|&nbsp; 11:00 AM
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{width: "20%", marginLeft: "20px"}}>
            <h3 class="box-title normal clearfix hide-under-overlay">
              <span class="pull-left fs-md pd-tp ng-binding">Tariff Details</span>
            </h3>
            <div className="boxShadow box-content hide-under-overlay aside-box-content pd-btm-0 ">
              <div className="uls">
                <div className="charge">
                  <span>Hotel Charge</span>
                  <span className="price">Rs.{props.details.price}</span>
                </div>
                <div className="charge">
                  <span>Hotel GST</span>
                  <span className="price">Rs.1,320</span>
                </div>
              </div>
              <div style={{paddingBottom: "20px", fontWeight:"600"}}>
                <span>You Pay</span>
                <span className="price">Rs.{props.details.totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
        { props.clientToken ?
          <>
          { props.isPaymentCompleted ?
              history.push(`/hotel/payment/success/${props.globalId}`)
            :
            <>
              <DropIn 
              options={{
                authorization: props.clientToken
              }}
              onInstance={instances => { setInstance(instances) }}
              />
              <div className="button-div">
                <Button variant="contained" color="secondary" style={{backgroundColor:"#d64443"}} onClick={payment}>
                  Pay Rs.{ props.details.totalPrice }
                </Button>
              </div>
            </>
          }
          </>
          :
          <div className="button-div">
            <Button variant="contained" color="secondary" style={{backgroundColor:"#d64443"}} disabled="true">
              Check Out
            </Button>
          </div>
        }
        
      </div>
      :
      <>
        <div className="checkout-box review-booking box-content text-center" style={{color: "red"}}>
          All Rooms are filled
          <br />
          <div className="mt-3">
            <Button variant="outlined" color="secondary" onClick={ () => history.push(`/hotel-search/dom/details/${hotelid}`)}>
              Back to Hotel Page
            </Button>
          </div>
        </div>
      </>
    }
      
    </>
  )
};

const mappingStateToProps = state => {
  return { 
    details:state.booking.details,
    clientToken: state.booking.clientToken,
    isPaymentCompleted: state.booking.isPaymentCompleted,
    globalId: state.booking.globalId,
    isBooked: state.booking.isBooked
  };
};

const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ CHECKOUT_ROOM, GET_BRAINTREE_TOKEN, PROCESS_PAYMENT }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(Checkout);
