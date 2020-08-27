import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { LOGIN_HOTEL } from '../../../store/business/auth/action';
import { bindActionCreators } from "redux";
import { useHistory } from 'react-router-dom';

const BannerContent = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    let creData = {
      email: email,
      password: password
    }
    props.LOGIN_HOTEL(creData)
    
    setTimeout(function(){
      let isValid = ( sessionStorage.getItem('isValid') === "true")
      
      if(isValid){
        sessionStorage.clear();
        history.push('/business/home')
      }
      else{
        // console.log(props)
        setError('Email and Password are Incorrect');
      }
    }, 1000)
  }
  return (
    <div className="b-box p-5">
      <div className="display-inlineBlock w-8 text__center">
        <div style={{marginBottom: "6%", marginTop:"5%"}}>
          <span className="font_50" >Welcome to Yatra for Business</span><br />
          <span className="font_28">The LARGEST platform to book & manage all your Business Travels!</span>
        </div>
      </div>
      <div className="display-inlineBlock float-right b-boxshadow p-3" style={{width: "20%"}}>
        <h3 className="b-title">Login</h3>
        <hr />
        <span style={{fontSize: "12px", color: "red"}}>{error}</span>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField id="standard-basic" onBlur={() => {setError('')}} label="Email" onChange={ (e) => setEmail(e.target.value) }/><br/>
          <TextField id="standard-basic" onBlur={() => {setError('')}} label="Password" style={{marginTop: "10px"}} onChange={ (e) => setPassword(e.target.value) }/>
          <Button variant="contained" color="secondary" type="Submit" style={{marginTop: "10px", marginLeft: "30%"}}>
          Login
          </Button>
        </form>
      </div>
    </div>
  )
};

const mappingStateToProps = state => {
  return { 
    isValid: state.hoteluser.isValid,
    message: state.hoteluser.message
  };
};

const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ LOGIN_HOTEL }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(BannerContent);