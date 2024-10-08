// CartSection.js

import Header from "./Header.js";
import SelectedItemsPopup from "./SelectedItemsPopup.js";
import CardItem from './CardItem.js';

import {useState, useEffect} from 'react';

const CartSection = () => {

    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem('cartItems')) || []
    );
    const [items, setItems] = useState([
        { id: 1, name: 'Peperoni Pizza', description: 'Description 1' },
        { id: 2, name: 'Pineapple Pizza', description: 'Description 2' },
        { id: 3, name: '4Chesse Pizza', description: 'Description 3' },
    ]);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        const existingItem = cartItems.find((i) => i.id === item.id);
        if (existingItem) {
            const updatedCart = cartItems.map((i) => {
                if (i.id === item.id) {
                    return { ...i, quantity: i.quantity + 1 };
                }
                return i;
            });
            setCartItems(updatedCart);
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const updateCart = (updatedCart) => {
        const filteredCart = updatedCart.filter((item) => item.quantity > 0);
        setCartItems(filteredCart);
    };

    const openCart = () => {
        // Open the cart popup
    };

    return (
        <div>
            <Header cartItems={cartItems} openCart={openCart} />
            <SelectedItemsPopup
                cartItems={cartItems}
                updateCart={updateCart}
            />
            {
                items.map((item) => (
                    <CardItem key={item.id} item={item} addToCart={addToCart} />
                ))
            }
        </div>
    );
};

export default CartSection;