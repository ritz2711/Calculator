import React, { useState } from 'react'
import './container.css';
import Wrapper from './wrapper';
import Buttons from './Buttons';

const Container = (props) => {
  const [data,setData] = useState('');
  const [result,setResult] =useState('');
  return (
    <div className='container'>
        <Wrapper data={data} result={result} />
        <div>
          <Buttons setData={setData} setResult={setResult} data={data}/>
        </div>
    </div>
  )
}

export default Container;