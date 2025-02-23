import { useEffect, useState } from 'react'


const Offerbanner = () => {

  const [offerText, setOfferText] = useState('✈️📦 Free Shipping on orders over $70 📦✨');
  const [isVisible, setIsVisible] = useState(true);

  const offers = [
    '🌟 Offer Ends Soon! 🌟',
    '✈️📦 Free Shipping on orders over $70 📦✨',
    '🚀 Grab It Before It’s Gone! 🚀'
  ];


  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setIsVisible(false); // Start fade out

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % offers.length;
        setOfferText(offers[currentIndex]);
        setIsVisible(true);
      }, 500); 

    }, 5000); 

    return () => clearInterval(intervalId);
  }, []);


  return (
      <div className='w-full p-5 px-60 text-2xl font-semibold text-center bg-amber-600 text-[#383838] rounded-xl overflow-hidden'>
          <div className={`${isVisible ? 'translate-y-[0%]' : 'translate-y-[200%]'} transform duration-500 ease-in-out`}>
              {offerText}
          </div>
      </div>
    
  )
}

export default Offerbanner