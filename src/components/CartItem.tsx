// React Hooks
import { useEffect, useState } from 'react';
// Redux Hooks
import { useSelector, useDispatch } from 'react-redux';
// React Router Hooks
import { useNavigate } from 'react-router-dom';
// Icons
import { TbCirclePlus, TbCircleMinus } from "react-icons/tb";
// Interfaces
import type { Product, CartState } from './Interfaces';
// Smart Components
import Navbar from './Navbar';
// Dumb Components
import Offerbanner from './Offerbanner';
import Benefits from './Benefits';
import Newsletter from './Newsletter';
// Slices
import { removeItem, updateQuantity } from './Slices/CartSlice';





const CartItem = () => {

  const cart = useSelector((state: {cart:CartState}) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  
  const [shippingFee,setShippingFee] = useState(3.99)
  const [totalAmount, setTotalAmount] = useState(0);


  const calculateTotalAmount = () => {
    const subTotal = cart.reduce((total: number, item: Product) => total + item.cost * item.quantity, 0).toFixed(2);
    return subTotal;
  };

  useEffect(() => {
    const subTotal: number  = Number(calculateTotalAmount());
    setTotalAmount(subTotal);

    if (subTotal > 69.99) {
      setShippingFee(0);
      }else {
        setShippingFee(3.99);
      }
  }, [cart]);

  

  const handleContinueShopping = () => {
    navigate('/products'); 
  };

  const handleIncrement = (item: Product) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item: Product) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      handleRemove(item);
    }
  };

  const handleRemove = (item: Product) => {
    dispatch(removeItem(item.name)); 
  };

  
  return (

    <>
      <Navbar />
      <div className='flex flex-col w-full px-60 mt-40'>
        <Offerbanner />
        <div className='w-full my-5 bg-[#777] rounded-xl overflow-hidden'>
          { cart.length < 1 ? [
             <div key='first' className='p-5 text-2xl font-semibold border-b text-center'>
              Your cart is empty. Start browsing products.
             </div>
          ] : cart.reduce((total: number,item: Product) => total + item.quantity,0) > 1 ? [
            <div key='1' className='p-5 text-2xl font-semibold border-b text-center'>
            You have {cart.reduce((total: number,item: Product) => total + item.quantity,0)} items in your cart
            </div>
          ] : cart.length === 1 ? [
            <div key='1' className='p-5 text-2xl font-semibold border-b text-center'>
            You have {cart.reduce((total: number,item: Product) => total + item.quantity,0)} item in your cart
            </div>
          ] : ""
        }     
          <div key='second' className={`flex py-3 px-7 text-2xl font-semibold ${cart.length > 0 ? 'border-b' : ''}`}>
            <span className='flex-1'>Cart Items</span>
            <span className='w-1/9 px-2'>Price</span>
            <span className='w-1/9 px-2'>Quantity</span>
            <span className='w-1/9 px-2 ml-10'>Total</span>
          </div>
          {cart.map((item, i:number) => (
          <div key={i} className='flex items-start pb-1 pt-7 px-7 text-2xl font-semibold cartProduct-bg-img'>
            <div className='flex flex-1 gap-10'>
              <img src={item.image}
                alt={item.name}
                className='size-25 object-cover'
              />
              <div className='flex flex-col justify-center gap-5'>
                <p className=''>{item.name}</p>
                <div onClick={() => handleRemove(item)} className='w-35 font-semibold text-xl text-orange-200 cursor-pointer'>Remove item</div>
              </div>
            </div>
              <div className='w-1/9 p-2 font-normal text-[22px]'>${item.cost}</div>
              <div className='w-1/9 p-2 flex items-center justify-between'>
                <TbCircleMinus onClick={() => handleDecrement(item)} />{item.quantity}<TbCirclePlus onClick={() => handleIncrement(item)} />  
              </div>
              <div className='w-1/9 p-2 ml-10'>${(item.cost * item.quantity).toFixed(2)}</div>
          </div>

          ))}
        </div>
        { cart.length > 0 ?  <div className='w-full mx-auto flex flex-col items-end'>
          <div className='px-5 py-4 text-2xl bg-[#777] rounded-t-xl font-semibold w-[50%]'>Cart Totals</div>
          <div className='px-5 py-4 text-xl bg-[#777] font-semibold border-y w-[50%] flex flex-col gap-7'>
            <div className='flex justify-between'><span>Cart Subtotal</span> ${calculateTotalAmount()}</div>
            <div className='flex justify-between font-light'><span className='font-semibold'>Shipping</span>{ !shippingFee ? "Free" : shippingFee}</div>
          </div>
          <div className='px-5 py-4 text-xl bg-[#777] rounded-b-xl font-semibold w-[50%] flex flex-col gap-7'>
            <div className='flex justify-between'><span>Order Total</span> ${(totalAmount + shippingFee).toFixed(2)}</div>
            <div className='flex justify-between'>
              <button onClick={() => handleContinueShopping()} className='border self-end w-55 font-medium py-2 bg-[#383838] rounded-md text-amber-600 border-none cursor-pointer'>Continue Shopping</button>
              <button onClick={() => alert("Feature will be implemented soon...")} className='border self-end w-70 py-2 bg-amber-600 rounded-md text-[#383838] border-none cursor-pointer'>Proceed to Chekout</button>
            </div>
          </div>
        </div>
         : <div className='w-full mx-auto flex flex-col items-end'>
         <button onClick={() => handleContinueShopping()} className='border self-end w-55 font-medium py-2 bg-[#777] rounded-md text-white border-none cursor-pointer'>Start Shopping</button>
       </div> } 
      </div>

      <Benefits />
      <Newsletter />
    </>
  );
};

export default CartItem;

