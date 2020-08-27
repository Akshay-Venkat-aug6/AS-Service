import React from 'react';
import InputNum from '../../form/input/inputnumber';

const TravellerNo = () => {
  sessionStorage.setItem('Adult No', 2)

  const handleTravellerNo = (e) => {
    sessionStorage.setItem('Adult No', e.target.value)
  }

  return (
    <>
      <div style={{paddingTop: "20px", width: "47%"}}>
        <InputNum 
          label="Traveller No"
          handleChange = { handleTravellerNo }
          required = "false"
          min = "0"
          value="2"
        />
      </div>
    </>
  )
};

export default TravellerNo