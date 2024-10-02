const initialState = {
    items:[]
}


// const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'addToCart':
//             let cart = JSON.parse(localStorage.getItem('cart'));
//             cart.items.push(action.payload);
//             console.log(cart);
//             localStorage.setItem('cart',JSON.stringify(cart));
//             break;
//         default:
//             localStorage.setItem('cart', JSON.stringify(state));
//             return state;
//
//     }
// }

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addToCart' : {
                console.log("localStorage: ",localStorage);

                if(!state.items.includes(action.payload)){
                    state.items = state.items.filter(item =>
                        item.name !== action.payload.name
                    );
                    state.items.push(action.payload);////
                }
                // state.items = state.items.filter(item => item.name !== action.payload.name);
                // state.items = state.items.filter(item =>
                //         item.name !== action.payload.name
                //     );
                    //else{
                    for(let i=0; i<state.items.length; i++){
                        if (state.items[i].id === action.payload.id) {
                            state.items[i].quantity += 1
                        }
                    }
                //}

                // if(state.items===0){
                //     state.items.push(action.payload);
                // }
                //
                // let count =0;
                // for(let i =0; i<state.items.length; i++){
                //     if(state.items[i].id !== action.payload.id){
                //         count++;
                //     }
                //     if(count===state.items.length-1){
                //         state.items.push(action.payload);
                //     }
                // }
                console.log("action.payload: ",action.payload.id);
                console.log("state.items:  ",state.items);
                // }else{
                //     state.items.push(action.payload);
                // }





                localStorage.setItem('cart', JSON.stringify(state.items));

            }
            break;

        case 'removeFromCart' : {
                state.items = state.items.filter(item => item.name !== action.payload.name);
                console.log(state.items);
                localStorage.setItem('cart', JSON.stringify(state.items));
            }
            break;

        default:
            if(localStorage.getItem('cart') === null){
                localStorage.setItem('cart', JSON.stringify([]));
            } else {
                // console.log(JSON.parse(localStorage.getItem('cart')).items);
                state.items = JSON.parse(localStorage.getItem('cart'));
            }
            return state;
    }
}

export const {addToCart} = cartReducer;
export default cartReducer;