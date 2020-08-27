import React from 'react';
import Header from '../../components/business/Header';
import Banner from '../../components/business/Banner';
import { useHistory } from 'react-router-dom';

const CredentialPage = () => {
  const history = useHistory();
  const isBusiness = (localStorage.getItem('isBusiness') === "true");
  return (
    <div>
      {isBusiness ? 
        history.push('/business/home')
        :
        <>
          <Header />
          <Banner />
        </>
      }
    </div>
  )
};

export default CredentialPage;