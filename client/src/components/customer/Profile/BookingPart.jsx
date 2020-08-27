import React from 'react';

const BookingPart = (props) => {
  console.log(props.isBooking)
  return (
    <>
      {props.isBooking ?
        <div style={{display: "flex"}}>
         { props.bookingHistory.map((booklist) => (
          
            <div className="box">
              <div>
                <span>{booklist.hotelName}</span>
                <br />
                <span className="mt-3">{booklist.address}</span>
              </div>
              <div style={{fontSize: "12px"}}>
                <div>
                  <span>Check In: </span>
                  <span>{booklist.checkIn}</span>
                </div>
                <div>
                  <span>Check Out: </span>
                  <span>{booklist.checkOut}</span>
                </div>
              </div>
              <div style={{fontSize: "12px"}}>
                <div>
                  <span>Total Room Booked: </span>
                  <span>{booklist.rooms}</span>
                </div>
                <div>
                  <span>Persons: </span>
                  <span>{booklist.persons}</span>
                </div>
              </div>
              <div style={{fontSize: "12px"}}>
                <div>
                  <span>Price: </span>
                  <span>Rs.{booklist.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        :
        'No Booking'
      }
      
    </>
  )
};

export default BookingPart