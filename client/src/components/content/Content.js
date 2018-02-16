import React from 'react';
import { Link } from 'react-router-dom'; 
import contentImage from '../../assets/images/content.jpg';
import './content.scss';

const Content = () => {
  return (
    <main>
      <div className='diagonal' />

      <div className='content'>
        <div className='text'>
          <p className='title'>Radically <strong>Inovative</strong> Technology</p>
          <p>Lorem Ipsutingry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</p>
          <div className='start-now-btn'>
            <Link to="/signups">
              Get All Signups
            </Link>
          </div>
        </div>
        <img src={contentImage} alt='cool pic' />
      </div>
    </main>
  );
}

export default Content;