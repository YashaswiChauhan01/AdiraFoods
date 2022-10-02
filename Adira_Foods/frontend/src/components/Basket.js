import React from 'react';
import UserServiceMethods from '../service/UserServiceMethods';
export default function Basket(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) =>a + c.unit_price * c.qty , 0);
  
    const shippingPrice = itemsPrice > 1000 ? 0 : 50;
    const totalPrice = itemsPrice + shippingPrice; 
 
    const handleClick =(e)=> {
       e.preventDefault()
       console.log(cartItems); 
       cartItems.map((item) => {
        item.quantity=item.qty;
       });
       console.log("After mapping");
       console.log(cartItems);
       const email = localStorage.email;

    UserServiceMethods.placeOrder(cartItems)
    .then((res)=> {
        props.history.push('/Payment');
        console.log("Products added to Cart");
        props.history.push('/Payment');
    }) .catch(error => {

        alert("Thank You for placing your Order with Adira Foods");
    //    props.history.push('/Payment');
    });
    }
    
    
    return (
       <aside className="block col-1">
        <h2>Cart Items</h2>
        <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}
        {cartItems.map((item) => (
            <div key={item.id} className="row">
                
            <div className="col-2">{item.title}</div>
            
            <div className="col-2">
            <button onClick={() => onAdd(item)} className="add">+</button>{' '}
            <button onClick={() => onRemove(item)} className="remove">-</button>{' '}
            </div>
            <div className="col-2 text-right">
                {item.qty} x Rs.{item.unit_price}
            </div>
            </div>
        ))}
        {cartItems.length !==0 && (
            <>
            <hr></hr>
            <div className="row">
                <div className="col-2">Items Price</div>
                <div className="col-1 text-right">Rs.{itemsPrice}</div>
            </div>

            <div className="row">
                <div className="col-2">Shipping Price</div>
                <div className="col-1 text-right">Rs.{shippingPrice}</div>
            </div>

            <div className="row">
                <div className="col-2"><strong>Total Price</strong></div>
                <div className="col-1 text-right"><strong>Rs.{totalPrice}</strong></div>
            </div>

            <div className="text-align:center">
                            <div>
                                <button type="submit" className="btn btn-lg btn-primary text-uppercase mt-3" onClick={handleClick}>Proceed</button>
                            </div>
                        </div>

            </>
        )}
        </div>


        </aside>
    );
}