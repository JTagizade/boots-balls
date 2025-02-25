// Redux Hooks
import { useSelector } from 'react-redux';
// Interfaces
import type { Product, CartState } from './Interfaces';
// Images





interface SingleProductProps {
    productInfo: Product; 
    addToCart: (product: Product) => void; 
}

const CSSClasses = {
  img: "size-[230px] object-cover absolute pointer-events-none top-[40%] left-[65%] transform translate-x-[-35%] translate-y-[-45%] transition-all duration-600 group-hover:translate-x-[-50%] group-hover:translate-y-[-35%] group-hover:scale-80",
  addToCartBtn: "flex justify-center items-center bg-[#508] w-full h-20 outline-none rounded-b-2xl montserrat font-extrabold text-3xl relative overflow-hidden",
}



const SingleProduct: React.FC<SingleProductProps> = ({ productInfo, addToCart }) => {


  const cart = useSelector((state: {cart:CartState}) => state.cart.items);
  const cartItems = cart.map(product => product.name);


  const handleAddToCart = () => {
    addToCart(productInfo)
  }


  return (
    <div className="w-[300px] h-[400px] rounded-2xl bg-blue-500 relative group product-bg-img">
        {/* <div ref={animatedElementRef} className='addToCartAnimation'></div>  */}
        <div className="h-[80%] px-5 pb-3 flex flex-col relative transform-style-preserve-3d">
            <span className="text-3xl leading-20 italic opacity-25 montserrat group-hover:opacity-100 transition-all duration-800">{productInfo.name}</span>
            <span className="text-2xl leading-10 mt-16 opacity-80 italic montserrat">{productInfo.year}</span>
            <span className="text-3xl leading-10 opacity-60 italic montserrat">{productInfo.brand}</span>
            <span className="bg-black text-[#fff] font-bold montserrat mt-auto ml-auto mr-[-20px] py-1.5 px-4 rounded-s-full">${productInfo.cost}</span>
            
            <img 
            src={productInfo.image} 
            alt={productInfo.name} 
            className={` 
              ${ productInfo.name === 'Puma King' ? 'h-full' : '' }
              ${ productInfo.name === 'Total 90' ? 'h-fit' : '' }
              ${ productInfo.name === 'Predator-red' ? 'w-fit left-[70%]' : '' }

              ${CSSClasses.img}`}
            ></img>
          
        </div>
        <button onClick={handleAddToCart} 
            className={` ${ !cartItems.includes(productInfo.name) ? 'addToCart cursor-pointer' : 'text-amber-200'} ${CSSClasses.addToCartBtn}`} 
            disabled={cartItems.includes(productInfo.name)} 
            data-text="Add to Cart">
            <h2 className='transition-all duration-500 ease'>
              { !cartItems.includes(productInfo.name) ? 
                productInfo.name : 
                [<img key="1" src='https://cdn0.iconfinder.com/data/icons/ecommerce-and-shopping-22/128/Add_to_cart_.png' alt='cart' className='size-15'></img>]
              }
            </h2>
        </button>
    </div>
  )
}

export default SingleProduct

// ${isAnimating ? 'sendtocart' : ''}