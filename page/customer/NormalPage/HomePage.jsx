import React from 'react';
import Header from '../../../components/customer/Normal/Header';
import Search from '../../../components/customer/Normal/Search';
import About from '../../../components/customer/Normal/About';

class HomePage extends React.Component{

  render(){
    return(
      <div>
        <Header />
        <div style={{display: "flex", padding: "10px", marginTop: "90px"}}>
          <Search />
          <div style={{marginLeft: "50px"}}>
            <About />
          </div>
        </div>
      </div>
    )
  }
}
  
export default HomePage