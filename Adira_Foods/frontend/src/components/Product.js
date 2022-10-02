import React from 'react'

export default function Product(props) {
  const { product, onAdd } = props;
    return (
        <div>
       
                                           <img className="small" src={'/assets/'+product.image+'.jpg'} alt={product.title}/>
                                           <h3>{product.title}</h3>
                                            <h6>{product.description}</h6>
                                           <div><h6>Rs.{product.unit_price}</h6></div>
                                           <div>
                                              <button onClick={() => onAdd(product)}>Add To Cart</button>              
                                           </div>
     </div> 
  );
}
