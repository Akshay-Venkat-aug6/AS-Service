import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

const Header = (props) => {
  const [token, settoken] = useState('');

  let history = useHistory();
  var isTrueSet = (localStorage.getItem('isCustomer') === 'true');
  if(!isTrueSet){
    isTrueSet = (props.isCustomer === 'true')
  }
  useEffect(() => {
    settoken(localStorage.getItem('token'))
  })

  const handleLogout = () => {
    localStorage.setItem('token', '');
    localStorage.setItem('isCustomer', false);
    history.push('/user/signin')
  }

  return(
    <Navbar fixed="top" className="boxShadow p10" style={{height: "70px"}}>
      <Navbar.Brand>AS Hotels</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <div  className="underline">
            <Nav.Link href="/">Home</Nav.Link>
            <div class="slider"></div>
          </div>
        </Nav>
        <Nav>
          {isTrueSet ? 
          <>
            <div  className="underline">
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              <div class="slider"></div>
            </div>
            <div  className="underline">
              <Nav.Link href="/manage/profile">Profile</Nav.Link>
              <div class="slider"></div>
            </div>
          </>
          :
          <div  className="underline">
            <Nav.Link href="/user/signin">Signin / Singup</Nav.Link>
            <div class="slider"></div>
          </div>
          }
          <div  className="underline">
            <Nav.Link href="/business/b2as">Join for Bussiness</Nav.Link>
            <div class="slider"></div>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};


const mappingStateToProps = ({user}) => {
  return { 
    isCustomer: user.isCustomer
  };
};

export default connect(
  mappingStateToProps
)(Header);