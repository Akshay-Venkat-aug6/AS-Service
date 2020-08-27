import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { CREATE_ROOM } from '../../../store/business/home/action';
import { bindActionCreators } from "redux";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);



const CreateRoom = (props) => {
  const [state, setState] = React.useState({
    AC: false,
    WIFI: false,
    BAR: false,
    SwimingPool: false,
    GYM: false,
    FitnessCenter: false
  });

  const handleChanges = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [roomname, setRoomname] = useState('');
  const [roomtype, setRoomtype] = useState('');
  const [persons, setPerosons] = useState('');
  const [availablerooms, setAvailableRooms] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    let nameAC, nameWIFI, nameBAR, nameFitness, nameSwimming, nameGYM;
    if(state.AC){
      nameAC = "AC"
    }
    if(state.WIFI){
      nameWIFI = "WIFI"
    }
    if(state.BAR){
      nameBAR = "BAR"
    }
    if(state.SwimingPool){
      nameSwimming = "SwimingPool"
    }
    if(state.GYM){
      nameGYM = "GYM"
    }
    if(state.FitnessCenter){
      nameFitness = "FitnessCenter"
    }

    let room_data = {
      roomname: roomname,
      roomType: roomtype,
      persons: persons,
      availableRooms: availablerooms,
      price: price,
      amentites: [nameAC, nameBAR, nameFitness, nameGYM, nameSwimming, nameWIFI],
      file: image
    }
    
    console.log(room_data)
    props.CREATE_ROOM(room_data)
    setShow(false)
    window.location.reload(false)
  }

  return(
    <div>
      <div className="b-box w-70 ml-15 mt-5 b-title p-3" style={{borderRadius: "50px"}}>
        <Button variant="primary" onClick={handleShow}>
          Create Rooms
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Rooms</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <TextField id="standard-basic" label="Room Name" onChange={(e) => setRoomname(e.target.value)} required/>
            
            <TextField id="standard-basic" label="Room type" onChange={(e) => setRoomtype(e.target.value)} className="ml-3" required/>
            
            <TextField id="standard-basic" label="Persons Staying" maxlength="1" pattern="([0-9])" onChange={(e) => setPerosons(e.target.value)} required/>

            <TextField id="standard-basic" label="Room Cost" className="ml-3" onChange={(e) => setPrice(e.target.value)} required/>
            
            <TextField id="standard-basic" label="No Of Rooms" onChange={(e) => setAvailableRooms(e.target.value)} required/> <br />
            <div className="mt-3">
              <div>
                <p>Choose Amentities: </p>
              </div>
              <div className="mt-4">
                <FormGroup row>
                    <FormControlLabel
                      control={<Checkbox checked={state.checkedA} onChange={handleChanges} name="AC" />}
                      label="AC"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={state.checkedA} onChange={handleChanges} name="WIFI" />}
                      label="WIFI"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={state.checkedA} onChange={handleChanges} name="BAR" />}
                      label="BAR"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={state.checkedA} onChange={handleChanges} name="SwimingPool" />}
                      label="SwimingPool"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={state.checkedA} onChange={handleChanges} name="GYM" />}
                      label="GYM"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={state.checkedA} onChange={handleChanges} name="FitnessCenter" />}
                      label="FitnessCenter"
                    />
                </FormGroup>
              </div>
            </div>
            <Form.File 
              id="custom-file"
              label="Custom file input"
              className="mt-2 w-80"
              custom
              onChange={(e) => setImage(e.target.files[0])}
            />
            <Button className="mt-3" type="Submit">
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
};

const mappingStateToProps = state => {
  return { 
    message: state.hoteluser.checkOtp
  };
};

const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ CREATE_ROOM }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(CreateRoom);