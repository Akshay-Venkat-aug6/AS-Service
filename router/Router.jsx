import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../assets/css/style.css'
// Customer Router
import SigninPage from '../page/customer/CredentialsPage/SigninPage';
import Signup from '../page/customer/CredentialsPage/Signup';
import OtpPage from '../page/customer/CredentialsPage/OtpPage';
import Loadingpage from '../page/customer/CredentialsPage/LoadingPage';
import SignupDetails from '../page/customer/CredentialsPage/SignDetails';
import HomePage from '../page/customer/NormalPage/HomePage';
import SearchPage from '../page/customer/NormalPage/SearchPage';
import HotelDetailsPage from '../page/customer/NormalPage/HotelDetailsPage';
import CheckOutPage from '../page/customer/NormalPage/CheckOutPage';
import ProfilePage from '../page/customer/NormalPage/ProfilePage';
import PaymentPage from '../page/customer/NormalPage/PaymentPage';

// Business Router
import CredentialPage from '../page/business/CredentialPage';
import CheckOtppage from '../page/business/CheckOtpPage';
import Checkpage from '../page/business/CheckPage';
import BusinessHomePage from '../page/business/HomePage';
import BusinessRoomPage from '../page/business/RoomPage';
import BookingPage from '../page/business/BookingPage';

// Error page
import ErrorPage from '../page/404ErrorPage';
import Errorpage from '../page/404ErrorPage';

const Router = () => {
  return(
    <Switch>?
      {/* Customer Signin */}
      <Route exact path="/user/signin" component={SigninPage}/>
      {/* Customer Signup */}
      <Route exact path="/user/signup" component={Signup}/>
      {/* Redirect */}
      <Route exact path="/user/redirect" component={Loadingpage}/>
      {/* Otp Page */}
      <Route exact path="/user/signup/otp/:emailId" component={OtpPage}/>
      {/* Signup Details Page */}
      <Route exact path="/user/signup/details" component={SignupDetails}/>
      {/* Home Page */}
      <Route exact path="/" component={HomePage}/>
      {/* Hotel Details Page */}
      <Route 
        exact 
        path="/hotel-search/dom/details/:id"
        component={HotelDetailsPage}
      />
      {/* Search  Page */}
      <Route 
        exact 
        path="/hotel-search/dom/search"
        component={SearchPage}
      />
      {/* Checkout  Page */}
      <Route 
        exact 
        path="/hotel-checkout/dom/checkout/:hotelid/:roomid"
        component={CheckOutPage}
      />
      {/* Payment page */}
      <Route 
        exact
        path="/hotel/payment/success/:paymentId"
        component={PaymentPage}
      />
      {/* Profile Page */}
      <Route exact path="/manage/profile" component={ProfilePage}/>

      {/* Business Router */}
      {/* B2AS Login */}
      <Route exact path="/business/b2as" component={CredentialPage}/>
      {/* CheckOtp */}
      <Route exact path="/business/otp/check/:id" component={CheckOtppage}/>
      {/* CheckOtp */}
      <Route exact path="/business/otp/check" component={Checkpage}/>
      {/* Home Page */}
      <Route exact path="/business/home" component={BusinessHomePage}/>
      {/* room Page */}
      <Route exact path="/business/room" component={BusinessRoomPage}/>
      {/* Booking Page */}
      <Route exact path="/business/booking" component={BookingPage}/>

      <Route component={Errorpage} />
    </Switch>
  )
};

export default Router