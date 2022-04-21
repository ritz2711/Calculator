import React from "react";
import "./Buttons.css";
import Button from "./Button";

const symbols = ["7","8","9","/","4","5","6","*","1","2","3","+","0",".","=","-","clear"];

const Buttons = (props) => {
  
  var className = "button";
  
  return (
    <div className="buttons">
      {symbols.map(sym => (
          <div key={sym} className={sym==='clear' ?'clear button':'button' }>
              <Button setData={props.setData} setResult={props.setResult} data={props.data} symbol={sym}  />
          </div>
      ))}
      
    

      
    </div>
  );
};

export default Buttons;
