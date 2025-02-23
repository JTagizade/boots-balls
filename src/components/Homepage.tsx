// React Hooks
import { useState } from 'react';
// React Router Hooks
import { useNavigate } from 'react-router-dom';
// Images
import Logo from '../assets/imgs/logo.png'




const Homepage = () => {

  const navigate = useNavigate();  
  const [scale, setScale] = useState(0); 


  const handleGetStartedClick = () => {
    setScale(70);
    setTimeout(() => {
      navigate('/products'); // Navigate after the animation
    }, 800);
    
  };


  return (
    <>
        <div className="background-image"></div>

        <div className="flex items-center justify-center h-[100vh] w-full gap-10 bg-[rgba(0,0,0,0.5)] backdrop-blur-xs text-white">

            <div className="flex flex-col w-1/5 gap-3 items-center justify-center mr-20 text-center">
              <img src={Logo} alt="logo" className='w-60'/>
                <p className='text-2xl border-t-3 border-amber-500 pt-10 mt-7'>Where History Meets the Present</p>

                <div className='relative mt-10'>
                    <button className="bg-[#383838] text-amber-500 py-3 px-4 rounded-md outline-none text-2xl cursor-pointer border-2 border-transparent hover:border-amber-500" onClick={handleGetStartedClick}>
                        Get Started
                    </button>
                    <div className="absolute top-0.5 left-14 size-14 rounded-full bg-[#383838] z-10 transition-all duration-1000" style={{ scale: `${scale}` }}></div>
                </div>
            </div>

            <div className="text-[26px] flex flex-col gap-10 w-3/5">
                <p> Welcome to Classic Boots&Balls, where tradition meets performance!</p>

                <p>At Classic Boots&Balls, we are passionate about the beautiful game and dedicated to bringing you the finest selection of classic footballs and boots. 
                Our curated collection features timeless designs and modern technology, ensuring that every football and pair of boots meets our rigorous standards of quality. Our team of football enthusiasts is here to guide you in finding the ideal gear that suits your style and needs.
                </p>

                <p>
                Explore our range of classic footballs that capture the essence of the game, and discover boots that combine comfort with performance. We believe that every player deserves the best, and we’re committed to supporting you every step of the way.
                </p>

                <p>
                Join us in celebrating the spirit of football. Visit Classic Boots&Balls today and experience the perfect blend of tradition and innovation right at your fingertips!
                </p>
            </div>

        </div>
      
    </>
  );
}

export default Homepage;


