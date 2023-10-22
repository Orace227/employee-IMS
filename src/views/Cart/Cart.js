import React, { useEffect, useState } from 'react';
import './Cartcss.css';

const Cart = () => {
  const [cartItems, setCart] = useState([]);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    setCart(cart);
  }, []);

  return (
    <div className="h-screen bg-gray-100">
      <h1 className="mb-10 text-center text-3xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cartItems.length !== 0 ? (
            <div className="max-h-[90vh] overflow-y-auto scrollbar">
              {cartItems.map((item) => (
                <CartItemDetail
                  key={item.id}
                  id={item.id}
                  imageSrc={item.imageUrl}
                  title={item.title}
                  description={item.description}
                  quantity={item.quantity}
                  price="259.000 ₭"
                />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center md:h-full">
              <h1 className="text-center text-3xl text-red-500">Please Choose Item to make an order!!</h1>
            </div>
          )}
        </div>
        {cartItems.length !== 0 && (
          <div className="mt-6 md:h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <SubTotal cartItems={cartItems} />
          </div>
        )}
      </div>
    </div>
  );
};

const CartItemDetail = ({ id, imageSrc, title, description, quantity }) => {
  console.log(id, imageSrc, title, description, quantity);
  const [productQuantity, setProductQuantity] = useState(quantity);

  const handleIncrement = () => {
    setProductQuantity(productQuantity + 1);
  };

  const handleDecrement = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const inputValue = e.target.value;
    // Use a regular expression to check if the input is a valid number
    if (/^\d+$/.test(inputValue)) {
      const newQuantity = parseInt(inputValue, 10);
      if (newQuantity >= 1) {
        setProductQuantity(newQuantity);
      }
    }
  };
  const handleDelete = (key) => {
    console.log(key);
    const cart = JSON.parse(localStorage.getItem('cart'));
    const updatedCart = cart.filter((item) => item.id != key);
    console.log({ updatedCart });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    // setCart(updatedCart); // Update the state with the new cart items
  };

  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start relative">
      {/* Cross (delete) icon in the top right corner */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="h-6 w-6 cursor-pointer absolute top-2 right-2 duration-150 hover-text-red-500"
        onClick={() => handleDelete(id)}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <img src={imageSrc} alt="product" className="w-full h-[100px] rounded-lg sm:w-40" />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <p className="mt-1 text-xs text-gray-700">{description}</p>
        </div>
        <div className=" flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="mt-10 flex items-center border-gray-100">
            <button
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover-bg-blue-500 hover-text-blue-50"
              onClick={handleDecrement}
            >
              -
            </button>
            <input
              className="h-7 w-16 border bg-white text-center text-xs outline-none"
              type="text"
              value={productQuantity}
              onInput={handleQuantityChange}
            />
            {/* Minus icon */}
            <button
              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover-bg-blue-500 hover-text-blue-50"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SubTotal = ({ cartItems }) => {
  // const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total items</p>
        <div>
          <p className="mb-1 text-lg font-bold">{cartItems.length}</p>
        </div>
      </div>
      <hr className="my-2" />
      <button className="w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover-bg-blue-600">Check out</button>
    </>
  );
};

export default Cart;
