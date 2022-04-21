
import React from 'react'
import './Button.css';


const Button = (props) => {
    const handleClick = ()=>{
      if(props.symbol === 'clear'){
        props.setData("");
        props.setResult("")
      }
      else if(props.symbol === '='){
        props.setResult(eval(props.data).toFixed(4));

      }

      else{
        props.setData(prev => prev+props.symbol);
      }
    }
  return (
    <>
    <div onClick={handleClick} className={props.symbol==='clear'?'clear button':'button'}>{props.symbol}</div>
    </>
  )
}
 

export default Button;