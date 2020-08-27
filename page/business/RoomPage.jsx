import React from 'react';
import Header from '../../components/business/Header';
import Room from '../../components/business/Room';
import { useHistory } from 'react-router-dom';

const Rooms = () => {
  const history = useHistory();
  const isBusiness = (localStorage.getItem('isBusiness') === "true");

  return(
    <>
      {isBusiness ?
        <div>
          <Header />
          <Room />
        </div>
        :
        history.push('/business/b2as')
      }
      
    </>
  )
};

export default Rooms;