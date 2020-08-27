import React from 'react';
import Header from '../../components/business/Header';
import Home from '../../components/business/Home';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

const HomePage = (props) => {
  const history = useHistory();
  const [value, setValue] = useState(0);
  const isBusiness = (localStorage.getItem('isBusiness') === "true")
  const isTokenVerified = ( sessionStorage.getItem('isTokenVerified') === 'true' )
  
  
  return (
    <>
      {isBusiness ?
        <div>
          <Header />
          <Home />
        </div>
        :
        history.push('/business/b2as')
      }
      
    </>
  )
};

const mappingStateToProps = (state) => {
  return {
    isTokenVerified: state.hoteluser.isTokenVerified
  }
}


export default connect(mappingStateToProps)(HomePage);