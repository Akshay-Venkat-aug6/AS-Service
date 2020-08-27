import React from 'react';
import InputNum from '../../form/input/inputnumber';

const RoomNo = () => {
  sessionStorage.setItem('Room No', 1)

  const handleRoomChange = (e) => {
    sessionStorage.setItem('Room No', e.target.value)
  }

  return (
    <>
      <div style={{paddingTop: "20px", width: "96%", paddingLeft:"15px"}}>
        <InputNum 
          label = "Room No"
          handleChange = {handleRoomChange}
          required = "false"
          min = "0"
          value="1"
        />      
      </div>
    </>
  )
};

export default RoomNo