import React from 'react';
import Button from '@material-ui/core/Button';

const PaymentPage = () => {
  return (
    <>
      <div style={{marginTop:"16%", marginLeft: "33%", fontSize: "30px"}}>
        Payment Completed Successfully!!!!!!!!
      </div>
      <div style={{textAlign: "center", marginTop: "20px"}}>
        <Button variant="contained" color="secondary">
          Back To Search Page
        </Button>
      </div>
    </>
  )
};

export default PaymentPage;