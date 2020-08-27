import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { REGISTER_HOTEL } from '../../../store/business/auth/action';
import { bindActionCreators } from "redux";
import { useHistory } from 'react-router-dom';

const BannerSignup = (props) => {
  const [firstname, setFirstName] = useState('');
  const [middlename, setMiddleName] = useState('');
  const [lastname, setLastName] = useState('');
  const [companyname, setCompanyname] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [firstError, setFirstError] = useState('');
  const [lastError, setLastError] = useState('');
  const [companyError, setCompanyError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [stateError, setStateError] = useState('');
  const [cityError, setCityError] = useState('');
  const [pincodeError, setPincodeError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!firstname){
      setFirstError('Please Enter First Name')
    }
    if(!lastname){
      setLastError('Please Enter Last Name')
    }
    if(!companyname){
      setCompanyError('Please Enter Company Name')
    }
    if(!address){
      setAddressError('Please Enter Address')
    }
    if(!state){
      setStateError('Please Enter State')
    }
    if(!city){
      setCityError('Please Enter City')
    }
    if(!pincode){
      setPincodeError('Please Enter Pin Code')
    }
    if(!mobile){
      setMobileError('Please Enter Mobile')
    }
    if(!email){
      setEmailError('Please Enter Email')
    }
    if(!password){
      setPasswordError('Please Enter Password')
    }

    props.REGISTER_HOTEL({
      name: firstname +' '+ middlename+' '+lastname,
      companyname: companyname,
      address: address,
      state: state,
      city: city,
      pin_code: pincode,
      mobileno: mobile,
      email: email,
      password: password,
      image: image
    });

    history.push('/business/otp/check/')
  }

  return (
    <div className="b-boxshadow bg-white w-60 ml-20">
      <div className="p-4">
        <div className="b-title">
          <p className="font_28 red">Signup</p>
        </div>
        <hr />
        <div className="pl-5 pt-2">
          <span style={{fontSize: "12px", color: "red"}}>{sessionStorage.getItem('Error')}</span>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <div>
              <h5 style={{fontSize: "16px"}}>YOUR FULL NAME</h5>
              <div className="flex">
                <div>
                  <TextField id="standard-basic"  onChange={ (e)=> { setFirstName(e.target.value) } } label="First Name" style={{marginLeft: "30px"}}/><br />
                  <span style={{fontSize: "12px", color: "red", marginLeft: "30px"}}>{firstError}</span>
                </div>
                <div>
                  <TextField id="standard-basic" onChange={ (e)=> { setMiddleName(e.target.value) } } label="Middle Name" style={{marginLeft: "30px"}}/>
                </div>
                <div>
                  <TextField id="standard-basic" onChange={ (e)=> { setLastName(e.target.value) } } label="Last Name" style={{marginLeft: "30px"}}/><br />
                  <span style={{fontSize: "12px", color: "red", marginLeft: "30px"}}>{lastError}</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h5 style={{fontSize: "16px"}}>COMPANY DETAILS</h5>
              <div>
                <div className="mt-3">
                  <TextField id="standard-basic" onChange={ (e)=> { setCompanyname(e.target.value) } } label="Company Name" style={{marginLeft: "30px", width: "93%"}}/><br />
                  <span style={{fontSize: "12px", color: "red", marginLeft: "30px"}}>{companyError}</span>
                </div>
                <div className="mt-3">
                  <TextField id="standard-basic" onChange={ (e)=> { setAddress(e.target.value) } } label="Address" style={{marginLeft: "30px", width: "93%"}}/><br />
                  <span style={{fontSize: "12px", color: "red", marginLeft: "30px"}}>{addressError}</span>
                </div>
                <div className="flex mt-3">
                  <div>
                    <TextField id="standard-basic" onChange={ (e)=> { setState(e.target.value) } } label="State" style={{marginLeft: "30px"}}/><br />
                  <span style={{fontSize: "12px", color: "red", marginLeft: "30px"}}>{stateError}</span>
                  </div>
                  <div>
                    <TextField id="standard-basic" onChange={ (e)=> { setCity(e.target.value) } } label="City" style={{marginLeft: "30px"}}/>
                    <br />
                  <span style={{fontSize: "12px", color: "red", marginLeft: "30px"}}>{cityError}</span>
                  </div>
                  <div>
                    <TextField id="standard-basic" onChange={ (e)=> { setPincode(e.target.value) } } label="Pin Code" style={{marginLeft: "30px"}}/><br />
                  <span style={{fontSize: "12px", color: "red", marginLeft: "30px"}}>{pincodeError}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h5 style={{fontSize: "16px"}}>CONTACT DETAILS FOR YATRA FOR BUSINESS ACCOUNT</h5>
              <div>
                <div className="flex">
                  <div className="mt-3">
                    <TextField id="standard-basic" onChange={ (e)=> { setMobile(e.target.value) } } label="Mobile No" style={{marginLeft: "30px", width: "118%"}}/> <br />
                  <span style={{fontSize: "12px", color: "red", marginLeft: "30px"}}>{mobileError}</span>
                  </div>
                  <div className="mt-3">
                    <TextField id="standard-basic" onChange={ (e)=> { setEmail(e.target.value) } } label="Email Id ( Used For Login Id)" style={{marginLeft: "100px", width: "118%"}}/><br />
                  <span style={{fontSize: "12px", color: "red", marginLeft: "30px"}}>{emailError}</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="mt-3">
                    <TextField id="standard-basic" onChange={ (e)=> { setPassword(e.target.value) } } label="Create Password" style={{marginLeft: "30px", width: "118%"}}/><br />
                  <span style={{fontSize: "12px", color: "red", marginLeft: "30px"}}>{passwordError}</span>
                  </div>
                  <div className="mt-4 ml-5">
                  <TextField name="upload-photo" type="file" style={{marginLeft: "50px", width: "98%"}} onChange={(e) => setImage(e.target.files[0])} required="true"/>
                  <span style={{fontSize: "12px", color: "red", marginLeft: "30px"}}>{passwordError}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 ml-35">
              <Button variant="contained" color="secondary" type="Submit">
                SIGN UP FOR FREE
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

const mappingStateToProps = state => {
  return { state: state };
};

const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ REGISTER_HOTEL }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(BannerSignup);
