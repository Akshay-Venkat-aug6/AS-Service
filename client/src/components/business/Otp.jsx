import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CHECK_OTP } from '../../store/business/auth/action';
import { bindActionCreators } from "redux";
import { useParams, useHistory } from 'react-router-dom';

const Otp = (props) =>{
  const [disbale, setDisable] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const handleOtp = (e) => {
    const { target: { name, value } } = e;
    sessionStorage.setItem(name, value)
    const { otp1, otp2, otp3, otp4, otp5, otp6 } = sessionStorage
    if(otp1 && otp2 && otp3 && otp4 && otp5 && otp6){
      let otp = otp1+''+otp2+''+otp3+''+otp4+''+otp5+''+otp6
      setDisable(true);
      props.CHECK_OTP({
        id: id,
        otp: otp
      });
      sessionStorage.clear()
      setTimeout(()=>{
        history.push('/business/home/')
      }, 2000)
      
    }
  }

  return(
    <div className="b-boxshadow bg-white w-50 ml-25 mt-8 p-5">
      <div className="b-title">
        <p className="font_28">CHECK OTP</p>
      </div>
      <hr />
      <div className="mt-5">
        <section>
          <form> 
            <input type="text" name="otp1" maxlength="1" onChange={handleOtp} pattern="([0-9])" disabled={disbale}/>
            <input type="text" name="otp2" maxlength="1" onChange={handleOtp} pattern="([0-9])" disabled={disbale}/>
            <input type="text" name="otp3" maxlength="1" onChange={handleOtp} pattern="([0-9])" disabled={disbale}/>
            <input type="text" name="otp4" maxlength="1" onChange={handleOtp} pattern="([0-9])" disabled={disbale}/>
            <input type="text" name="otp5" maxlength="1" onChange={handleOtp} pattern="([0-9])" disabled={disbale}/>
            <input type="text" name="otp6" maxlength="1" onChange={handleOtp} pattern="([0-9])" disabled={disbale}/>
          </form> 
        </section>
        <span style={{color: "red", marginTop: "20px"}}>{props.message}</span>
      </div>
    </div>
  )
};

const mappingStateToProps = state => {
  return { 
    message: state.hoteluser.checkOtp
  };
};

const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ CHECK_OTP }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(Otp);