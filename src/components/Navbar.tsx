// React Hooks
import { useState } from 'react';
// React Router Hooks
import { useLocation, useNavigate } from 'react-router-dom';
// Redux Hooks
import { useSelector } from 'react-redux';
// Interfaces
import type { Product,CartState } from './Interfaces';
// Icons
import { IoIosFootball } from "react-icons/io";
import { PiShoppingCartSimpleLight, PiShoppingCartSimpleFill } from "react-icons/pi";
// Images
import emptyCartImg from '../assets/imgs/empty-cart.png'
import Logo from '../assets/imgs/logo.png'


const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const isCartPage = location.pathname === '/cart';

  const cart = useSelector((state: {cart:CartState}) => state.cart.items);

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isHoveredCartInfo, setIsHoveredCartInfo] = useState<boolean>(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mouseLeaveTimeout, setMouseLeaveTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mouseLeaveTimeoutCartInfo, setMouseLeaveTimeoutCartInfo] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (mouseLeaveTimeout) {
      clearTimeout(mouseLeaveTimeout); 
    }
    if (!isCartPage) {
      const timeout = setTimeout(() => {
        setIsHovered(true);
      }, 1500); 
      setHoverTimeout(timeout);
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout); 
    }
    if (!isCartPage) {
      const mouseLeaveTimeout = setTimeout(() => {
        setIsHovered(false);
      }, 2500); 
      setMouseLeaveTimeout(mouseLeaveTimeout)
    }
  };

  const handleCartInfoMouseEnter = () => {
    if (mouseLeaveTimeoutCartInfo) {
      clearTimeout(mouseLeaveTimeoutCartInfo); 
    }
    setIsHoveredCartInfo(true);
  }

  const handleCartInfoMouseLeave = () => {
    const mouseLeaveTimeoutCartInfo = setTimeout(() => {
      setIsHoveredCartInfo(false);
    }, 2500);
    setMouseLeaveTimeoutCartInfo(mouseLeaveTimeoutCartInfo);
  }


  const toCart = () => {
    navigate('/cart');
  }

   


  return (
    <nav>
        <div className='w-full bg-[#383838] text-[#bfe0f6] navbar-shadow h-20 flex gap-40 items-center px-60 fixed top-0 z-100'>
            <div key="1" className="flex-2 flex justify-start">
              <img src={Logo} alt="logo" onClick={() => navigate('/')} className='w-24 cursor-pointer' />
            </div>
            <div className='flex-1 '>
              <div key="2"
              onClick={toCart}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave} 
              className="w-12 h-12 flex items-center justify-around gap-4 ml-auto pl-2 text-3xl border rounded-full cursor-pointer transition-all duration-700 overflow-hidden group hover:w-30 hover:">
              { cart.length > 0 ? [<div key="1"><PiShoppingCartSimpleFill /></div>] : [<div key="1"><PiShoppingCartSimpleLight /></div>]  }            
              <IoIosFootball key="2" className='transform translate-x-12 transition-all duration-700 rotate-180 group-hover:rotate-0 group-hover:translate-x-0'/>
              </div>
            </div>
        </div>

        { !isCartPage && (isHovered || isHoveredCartInfo) && (
            <div 
            onMouseEnter={handleCartInfoMouseEnter} 
            onMouseLeave={handleCartInfoMouseLeave}
            className='w-80 h-auto min-h-80 fixed top-25 right-4 flex flex-col bg-[#777] z-100 rounded-2xl overflow-hidden border-2 border-transparent hover:border-white'>

               { cart.length < 1 ? [
                    <div key="1" className='p-3 text-2xl font-semibold border-b text-center'>
                      Your cart is empty
                    </div>
                  ] : cart.length > 0 ? [
                    <div key="1" className='p-3 text-2xl font-medium border-b text-center'>Total items: {cart.reduce((total: number,item: Product) => total + item.quantity,0)}</div>
                  ] : ""
               } 

               { cart.length < 1 ? [
                  <img key="2" src={emptyCartImg} alt="empty cart" />
                  ] : [
                    <div key="2" className='h-[85%] flex-1 flex flex-wrap px-0 items-center justify-center'>
                        { cart.map((item, i: number) => (                       
                          <div key={i} className='m-2 rounded-full group relative flex items-center justify-center'>
                            <img src={item.image} alt={item.image} className={`${ cart.length === 1 ? "size-40" : cart.length === 2 ? "size-30" : "size-20"} object-cover transition-all duration-400 group-hover:opacity-10`} />
                            <span className={`${ cart.length === 1 ? "text-6xl" : cart.length === 2 ? "text-5xl" : "text-4xl"} absolute text-amber-200 font-bold opacity-0 transition-all duration-500 group-hover:opacity-100`}>{item.quantity}</span>
                          </div>
                        ))}
                    </div>

               ]}
               
               { cart.length > 0 ? [ 
                      <div key="3" className='h-[15%] my-3  flex justify-center items-center'>
                      <button onClick={toCart} className='border h-10 w-[50%] font-medium py-2 bg-[#383838] rounded-md text-amber-600 border-none cursor-pointer'>Go to Cart</button>
                      </div>
               ] : '' }


            </div>
        )}

    </nav>
  )
}

export default Navbar