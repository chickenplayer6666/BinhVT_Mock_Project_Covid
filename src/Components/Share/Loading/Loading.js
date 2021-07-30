import React from 'react';

import logo from '../../../logo.svg';
import './Loading.css';

function Loading(props) {
    return (
      <div className="loading-spinner">
        <img src={logo} className="loading-logo" alt="logo" />
      </div>
    );
}

export default Loading;