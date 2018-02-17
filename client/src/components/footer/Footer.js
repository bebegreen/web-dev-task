import React from 'react'; 
import './footer.scss'; 

const Footer = ({handleStartNow}) => (
  <footer>
    <p>Copyright &copy; 2017 Sisense Inc. All rights reserved.</p>
    <ul>
      <li>Terms of Use</li>
      <li>Sitemap</li>
      <li className='start-now-btn' onClick={handleStartNow}>Start Now</li>      
    </ul>
  </footer>
); 

export default Footer;