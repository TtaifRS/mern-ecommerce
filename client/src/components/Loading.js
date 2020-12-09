import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loading = () => {
  return (
    <Loader
      type="ThreeDots"
      color="#00000094"
      height={100}
      width={100}
      timeout={3000} //3 secs
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
      }}
    />
  );
};

export default Loading;
