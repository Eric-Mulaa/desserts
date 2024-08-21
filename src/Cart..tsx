import { MdOutlineCancel } from "react-icons/md";
import { LuTrees } from "react-icons/lu";
import { AiTwotonePieChart } from "react-icons/ai";
import './Cart.css'

interface CartProps{
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
  confirmed:boolean;
  handleCancel: (index:number)=>void;
  hanldeConfirm: ()=>void;
}

export default function Cart( {handleCancel, data, hanldeConfirm}:CartProps ) {
  const totalCount = data.reduce((sum, item) => sum + item.count, 0);
  const totalOrder = data.reduce((sum, item)=>sum + item.count*item.price, 0)

  return (
    <div className="cart-container">
      <h3 className="cart-header">Your Cart ({totalCount})</h3>
      {totalCount >0 ? (
        <>

{
        data.map((item,index)=>(
          item.count !=0 &&
          <div className="cart-items" key={item.name}>
        <div className="cart-item">
          <p className="cart-name">{item.name} </p>
          <span className="cart-count">{item.count}x </span>
          <span className="cart-price"> @ ${item.price} </span>
          <span className="total-cart-price"> ${item.count * item.price} </span>
        </div>
        <button className="cancel-button" onClick={()=>handleCancel(index)}><MdOutlineCancel /></button>
      </div>

        ))
      }

      <div className="total-order">
        <span className="descr">Order Total</span>
        <span className="value">${totalOrder}</span>
      </div>

      <p className="carbon"> <span className="carbon-icon"><LuTrees /></span> This is a <span className="carbon-neural">carbon-neutral</span> delivery</p>
      
      <button className="confirm-button" onClick={hanldeConfirm}>Confirm Order</button>

        </>
      ):(

        <div>
        <div className="empty-icon"><AiTwotonePieChart /></div>
        <p className="empty-description">Your added items will appear here</p>
      </div>

      )}
      
    </div>
  )
}

  