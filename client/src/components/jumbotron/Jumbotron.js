import React from 'react';
import './jumbotron.scss';

const Jumbotron = () => (
  <div className='jumbotron'>
    <div className='shadow'>
      <h1><span>AGILE BI</span> FOR EVERYONE</h1>
      <div className='features'>
        <div className='feature'>
          <i className="fa fa-database icon"></i>
          <p>Radical</p>
          <p><strong>Inovation</strong></p>
        </div>
        <div className='feature'>
          <i className="fa fa-bolt icon"></i>
          <p>Instant</p>
          <p><strong>Impact</strong></p>
        </div>
        <div className='feature'>
          <i className="fa fa-comments icon"></i>
          <p>Obsessed With</p>
          <p><strong>Customer Success</strong></p>
        </div>
      </div>
      <p className='description'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
      </p>
      <div className='button'>
        Watch Demo
      </div>
    </div>
  </div>
);

export default Jumbotron;