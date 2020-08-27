import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { CHECK_AVAILABILITY } from '../../../store/customer/booking/action';
import { bindActionCreators } from "redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);


const CheckAvailability = (props) => {
  let { id } = useParams();

  const handleCheck = () => {
    let checkIn = sessionStorage.getItem('checkIn')
    let checkOut = sessionStorage.getItem('checkOut')
    let available = {
      checkIn: checkIn,
      checkOut: checkOut,
      hotelid: id
    }

    props.CHECK_AVAILABILITY(available)
  }

  const classes = useStyles();
  return (
    <div className="checkAvailability">
      <p>Check Availability</p>
      <div className="flex-d">
        <div className={classes.container} noValidate>
          <div>
            <TextField
              id="date"
              label="Check In Date"
              type="date"
              value={sessionStorage.getItem('checkIn')}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div>
            <TextField
              id="date"
              label="Check Out Date"
              type="date"
              value={sessionStorage.getItem('checkOut')}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div style={{marginLeft: "10px"}}>
            <TextField id="standard-basic" label="Check In Time" disabled value="11:00AM"/>
          </div>
          <div style={{marginLeft: "10px"}}>
            <TextField id="standard-basic" label="Check Out Time" disabled value="10:00AM"/>
          </div>
        </div>
        <Button 
          variant="contained" 
          color="secondary" 
          type="submit" 
          style={{marginLeft: "50px"}}
          onClick={handleCheck}
        >
          Check Availability
        </Button>
      </div>
    </div>
  )
};

const mappingStateToProps = state => {
  return { isAvailable:state.booking.isAvailable };
};

const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ CHECK_AVAILABILITY }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(CheckAvailability);