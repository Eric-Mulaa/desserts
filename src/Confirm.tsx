import './Confirm.css'
import { GiConfirmed } from "react-icons/gi";

interface ConfirmProps{
  data: {
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
  }[];
  confirmed:boolean
  hanldeConfirm:()=>void;
}


export default function Confirm( {hanldeConfirm, data, confirmed}:ConfirmProps ) {

  const totalOrder = data.reduce((sum, item)=>sum + item.count*item.price, 0)

  return (
    <>
    {confirmed && (
      <div className="cover">
      <div className='confirm-card-container'>
      <div className="confirm-card">
        <div className="tick-icon"><GiConfirmed /></div>
        <h1 className='confirm-header'>Order Confirmed</h1>
        <p className='confirm-description'>We hope you enjoy your food!</p>
        {
          data.map((item)=>
          item.count >0 && (
            <div className="confirm-items" key={item.name}>
              <div className="confirm-item">
                <img className="item-thumbnail" src={item.image.thumbnail} alt="dessert order" />
                <div>
                  <h3 className="item-name"> {item.name} </h3>
                  <span className="item-count"> {item.count}x </span>
                  <span className="item-price"> @ ${item.price} </span>
                </div>
              </div>
              <p className="item-ordered-price">${item.price*item.count}</p>
            </div>
          ))
        }

        <div className="total-item-ordered">
          <span className="total-item-description">Order Total</span>
          <span className="total-item-order-price"> ${totalOrder} </span>
        </div>

        <button className='new-order-button' onClick={hanldeConfirm}>Start New Order</button>

      </div>
      </div>
      
    </div>
    )}
    </>
  )
}

