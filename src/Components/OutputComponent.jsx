
import React from 'react'
import { useSelector } from 'react-redux'
import './stylesModule.css';


export default function OutputComponent() {

    const data = useSelector((data) => data.count)

  return (
    <div style={{alignItems:"center", marginTop:"100px"}}>
        {/* <h2>Redux Stored Data</h2> */}
        <h1 className='display'>{data}</h1>
    </div>
  );
}
