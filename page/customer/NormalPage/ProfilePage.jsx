import React from 'react';
import Header from '../../../components/customer/Normal/Header';
import Profile from '../../../components/customer/Profile/Profile';
import { useHistory } from "react-router-dom";

const ProfilePage = (props) => {
  const history = useHistory();
  var isTrueSet = (localStorage.getItem('isCustomer') === 'true');
  
  return (
    <div>
      {isTrueSet ?
        <>
          <Header />
          <div style={{marginTop: "90px"}}>
            <Profile /> 
          </div>
        </>
        :
        history.push('/user/signin')
      }
    </div>
  )
};

export default ProfilePage;