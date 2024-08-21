import { useEffect, useState } from 'react'
import './App.css'
import Data from './data.json';
import Card from './Card'
import Default from './Buttons/Default'
import Open from './Buttons/Open.'
import Cart from './Cart.'
import Confirm from './Confirm'

interface AppProps {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
  count: number;
}

export default function App() {

  const[data, setData] = useState<AppProps[]>([])
  
  const[confirmed, setConfirmed] = useState<boolean>(false)

    useEffect(()=>{
        const modifiedData = Data.map( item =>({
            ...item,
            confirmed:false,
            count:0
        }))
        setData(modifiedData) 
    }, [])

    const handleFlip = (index: number) => {
      const updatedData = data.map((item, i) =>
        i === index ? { ...item, count:item.count+1 } : item
      );
      setData(updatedData);
    }
    
    const handleDecrement = (index: number) => {
      const updatedData = data.map((item, i) =>
        i === index && item.count > 0 ? { ...item, count: item.count - 1 } : item
      );
      setData(updatedData);
    };

    const handleIncrement = (index: number) => {
      const updatedData = data.map((item, i) =>
        i === index ? { ...item, count: item.count + 1 } : item
      );
      setData(updatedData);
    };

    function handleCancel(index:number){
      const updatedData = data.map((item, i)=>(
        i === index ? {...item, count:0}:item
      ))
      setData(updatedData)
    }

    function handleConfirm(){
      setConfirmed(!confirmed)
    }

    function handleConfirmReset(){
      setConfirmed(!confirmed)
      const resetData = data.map((item)=>
      ({...item, count:0}))
      setData(resetData)
    }

  return (
    <div>
      <div className='app-container'>
        <div className='card-component'>
         <Card 
          data={data} 
          Default={Default}  
          Open={Open}
          onFlip={handleFlip} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
         />
        </div>

        <div className='cart-component'>
         <Cart 
          data={data}
          confirmed={confirmed}
          handleCancel={handleCancel}
          hanldeConfirm={handleConfirm}
         />
        </div>
      
      </div>

       <Confirm 
        data={data}
        confirmed={confirmed}
        hanldeConfirm={handleConfirmReset}
       />

      </div>
  )
}

  