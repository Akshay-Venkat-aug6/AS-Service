import React from 'react';
import '../assets/css/errorStyle.css';

const Errorpage = () => {
  
  const isBusiness = window.location.href.includes('business')

  return(
    <div class="mainbox">
    <div class="err">4</div>
    <i class="far fa-question-circle fa-spin"></i>
    <div class="err2">4</div>
    <div class="msg">
      Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
      <p>Let's go 
        {isBusiness ?
          <a href='/business/home'>&nbsp;home&nbsp;</a>:
          <a href='/'>&nbsp;home&nbsp;</a>
        }
        
      and try from there.</p></div>
    </div>
  )
};

export default Errorpage;