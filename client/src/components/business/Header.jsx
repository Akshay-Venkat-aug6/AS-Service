import React from 'react';
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { FaBed } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { connect } from 'react-redux';
import { LOGOUT_HOTEL } from '../../store/business/auth/action';
import { bindActionCreators } from "redux";

const Header = (props) => {
  const isBusiness = ( localStorage.getItem('isBusiness') === 'true' || (props.isBusiness === 'true'))
  const handleLogout = () =>{
    localStorage.setItem('isBusiness', '');

    props.LOGOUT_HOTEL();
    setTimeout(() => {
      window.location.reload(false)
    }, 1000)
  }
  return (
    <div className="b-box p-3 b-border-red">
      <div className="pl-5 business-name display-inlineBlock">
        <span>
          AS for Business
        </span>
      </div>
      {isBusiness ? 
        <div className="b-signup">
          <div className="display-inlineBlock">
            <span><AiFillHome /></span>
            <a className="pl-2" href="/business/home">Home</a>
          </div>
          <div className="display-inlineBlock pl-4">
              <span><FaBed /></span>
              <a href="/business/room" className="pl-2">Rooms</a>
          </div>
          <div className="display-inlineBlock pl-4">
            <span><BsFillBookmarkFill /></span>
            <a href="/business/booking" className="pl-2">Booking</a>
          </div>
          <div className="display-inlineBlock pl-4">
            <span><AiOutlineLogout   /></span>
            <span className="pl-2 cursor" onClick={handleLogout}>Logout</span>
          </div>
        </div>
        :
        ""
      }
    </div>
  )
};

const mappingStateToProps = (state) => {
  return { isBusiness: state.hoteluser.isBusiness };
};

const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ LOGOUT_HOTEL }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(Header);
