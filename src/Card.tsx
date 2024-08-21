import './Card.css';

interface CardProps {
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
  Default: React.ComponentType<{ onClick: () => void }>;
  Open: React.ComponentType<{
    count:number;
    handleDecrement: ()=>void;
    handleIncrement: ()=>void;
  }>;
  onFlip:(index:number)=>void;
  onIncrement:(index:number)=>void;
  onDecrement:(index:number)=>void;
}

export default function Card({ data, Default, Open, onFlip, onIncrement, onDecrement }: CardProps) {

  return (
    <div className="container">
      <h3 className="heading">Desserts</h3>
      <div className="card-container">
        <div className="cards">
          {data.map((item, index) => (
            <div className="images" key={item.name}>
              <img
                className="image"
                srcSet={`
                  ${item.image.mobile} 600w,
                  ${item.image.tablet} 800w,
                  ${item.image.desktop} 1200w
                `}
                sizes="(max-width: 600px) 600px,
                       (max-width: 800px) 800px,
                       1200px"
                src={item.image.mobile}
                alt={item.name}
              />
              {item.count ? (
                <Open count={item.count} handleDecrement={()=>onDecrement(index)} handleIncrement={()=>onIncrement(index)} />
              ) : (
                <Default onClick={()=>onFlip(index)}/>
              )}
              <p className="category">{item.category}</p>
              <p className="name">{item.name}</p>
              <p className="price">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
