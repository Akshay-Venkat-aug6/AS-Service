import React from 'react';
import Loading from '../../components/customer/Loading';
import Header from '../../components/business/Header';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const CheckOtppage = (props) => {
  const history = useHistory();
  // console.log(props.id)
  return(
    <div>
      <Header />
      {props.id ?
        history.push(`/business/otp/check/${props.id}`)
        :
        props.isRegistered ?
          <Loading />
          :
        history.push('/business/b2as')
        
      }
      
    </div>
  )
};

const mappingStateToProps = state => {
  return { 
    id: state.hoteluser.id,
    isRegistered: state.hoteluser.isRegistered
  };
};

export default connect(
  mappingStateToProps
)(CheckOtppage);
