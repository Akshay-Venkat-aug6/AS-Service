import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { GET_PROFILE, UPDATE_PROFILE } from '../../../store/customer/details/action';
import { bindActionCreators } from "redux";
import BookingPart from './BookingPart';
import Loading from '../Loading';

const Profile = (props) => {
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  // console.log(props.profile.address)
  useEffect(() => {
    props.GET_PROFILE();
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault();
    let updatePart
    if(password){
      if(password.length >= 8){
        updatePart = {
          address: address,
          password: password
        }
      }
      else{
        alert('Password Should Greater than 8')
      }
    }else{
      updatePart = {
        address: address,
        password: password
      }
    }
    props.UPDATE_PROFILE(updatePart)

  }
  return (
    <>
      <div style={{width: "80%", marginLeft:"10%", backgroundColor:"white"}} className="boxShadow">
        {props.isProfile ? 
          <div style={{display:"flex"}}>
            <div style={{width:"20%", padding:"30px"}}>
              <div style={{width: "105px", borderRadius:"50%", backgroundColor:"red",height: "105px", marginLeft: "20%"}}>
                {/* Hai */}
              </div>
              <div className="profile">
                <span className="name">{props.profile.name}</span>
                <br />
                <span>{props.profile.email}</span>
                <br />
                <span>{props.profile.phoneno}</span>
              </div>
            </div>
            <div style={{padding: "20px"}}>
              <div>
                <div style={{fontSize:"1.4rem"}}>
                  Profile
                </div>
                <hr />
                <div className="profile-details">
                  <form onSubmit={handleUpdate}>
                    <span>
                      <TextField className="profile-input"  id="standard-basic" value={props.profile.name} disabled/>
                    </span>
                    <span>
                      <TextField className="profile-input" id="standard-basic"  value={props.profile.email} disabled/>
                    </span>
                    <span>
                      <TextField className="profile-input" id="standard-basic"  value={props.profile.phoneno} disabled/>
                    </span>
                    <span>
                      <TextField className="profile-input" id="standard-basic"  value={address} onChange={(e) => {setAddress(e.target.value)}} required/>
                    </span>
                    <span>
                      <TextField className="profile-input" id="standard-basic" label="Password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                    </span>
                    <div style={{marginLeft:"85%", marginTop:"20px"}}>
                      <Button variant="contained" color="secondary" type="Submit">
                        Update
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
              <hr />

              <div>
                <div style={{fontSize:"1.4rem"}}>
                  Booking Details
                </div>
                <hr />
                <BookingPart bookingHistory={props.profile.booking} isBooking={props.isBooking}/>
              </div>
            </div>
          </div> 
          :
          <div>
            <Loading />
          </div>
        }
        
      </div>
    </>
  )  
};

const mappingStateToProps = ({detail}) => {
  return { 
    profile: detail.profile,
    isBooking: detail.isBooking,
    isProfile: detail.isProfile
  };
};

const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ GET_PROFILE, UPDATE_PROFILE }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(Profile);