import React, { useState } from 'react'
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import './Open.css'

interface OpenProps{
    count:number;
    handleDecrement: ()=>void;
    handleIncrement: ()=>void;
}


export default function Open({handleDecrement,handleIncrement, count}:OpenProps) {

  return (
    <div className='open-button'>
        <button className='minus' onClick={handleDecrement}> <CiCircleMinus /></button>
        <span>{count}</span>
        <button className='plus' onClick={handleIncrement}><CiCirclePlus /></button>
    </div>
  )
}

