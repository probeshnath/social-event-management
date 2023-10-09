import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Retrieve cart data from local storage
    const cartData = JSON.parse(localStorage.getItem('cart'));
    if (cartData) {
      setCart(cartData);
    }
  }, []);

  return (
    <div className='max-w-6xl mx-auto'>
      <h2 className='text-center font-bold text-4xl py-5'>My Cart</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {cart.map((item) => (
          <div key={item.id} className='border p-4 rounded shadow'>
            {/* Render cart item details here */}
            <h3 className='text-xl font-semibold'>{item.name}</h3>
            <p>Price: ${item.price}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
