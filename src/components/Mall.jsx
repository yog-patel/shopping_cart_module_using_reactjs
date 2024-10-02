import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
// import {useEffect} from "react";
// import {render} from "react-dom";
// import reactRefresh from "eslint-plugin-react-refresh";
// import cartReducer, {addToCart} from "../redux/cartReducer.js";
 // import {useEffect} from "react";
// import {addToCart} from "../redux/cartReducer.js";

function Mall() {

    const itemsList = [
        {id: 1, name: "Apple", price: 7, quantity: 0},
        {id: 2, name: "Mango", price: 15, quantity: 0},
        {id: 3, name: "Banana", price: 12, quantity: 0},
        {id: 4, name: "Orange", price: 17, quantity: 0},
        {id: 5, name: "Pineapple", price: 22, quantity: 0},
    ];
    var cartItems = useSelector((state) => state.items);

    const dispatch = useDispatch();

    const getAllCartItems = () => {
        //console.log(getAllCartItems);
        cartItems = JSON.parse(localStorage.getItem('cart'));
        //console.log(cartItems);
    }
    function refreshPage(){
        window.location.reload();
    }

    return (
        <>

                <ul>
                    {itemsList.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => { dispatch({type: 'addToCart', payload: item}), getAllCartItems()}}>Add to Cart</button>
                        </li>
                    ))}
                </ul>

            <div className="cart-display" >
                <h3>Shopping Cart</h3>
                 <ul>
                     {cartItems.length && cartItems.map((item, index) => (

                         <li key={index}>
                             {item.name} - ${item.price} ........Quantity: {item.quantity}
                             <button>Increase Quantity</button>
                             <br/>
                             <button onClick={() => {dispatch({type: 'removeFromCart', payload: item}), getAllCartItems(), refreshPage()} }>Remove</button>
                         </li>
                     ))}

                 </ul>
            </div>

        </>
    )
}

export default Mall;