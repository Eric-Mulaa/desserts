import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import './Default.css'

interface DefaultProps{
  onClick: ()=>void;
}

export default function Default({onClick}:DefaultProps) {
    
  return (
    <button className='default-button' onClick={onClick}> <MdAddShoppingCart /> Add to Cart</button>
  )
}


