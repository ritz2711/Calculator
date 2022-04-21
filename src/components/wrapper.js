import React from "react";
import './wrapper.css';

const wrapper = (props) => {
  return( 
  <div className="wrapper">
      <div className={props.result>1000?'resu':'result'}>
          <h1>{props.result}</h1>

      </div>
      <div className="text">
          <h3>{props.data}</h3>

      </div>
    
  </div>
  );
};

export default wrapper;
