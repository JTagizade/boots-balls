// React Hooks
import { useState } from "react";
// Images 
import NewsletterPic from '../assets/imgs/newsletter.jpg';
import Logo from '../assets/imgs/logo.png'
// Icons
import { AiTwotoneCloseCircle } from "react-icons/ai";




const NewsletterPopUp = () => {

    const [newsletter, setNewsletter] = useState(false);
    const [slideDown, setSlideDown] = useState(false);

  return (
    <>
        { newsletter ? [
                <div onClick={ () => {
                    setNewsletter(false);
                    setSlideDown(true);
                    setTimeout(() => {
                        setSlideDown(false);
                    }, 3000);
                } } className='w-full h-[100vh] backdrop-blur-md fixed top-0 z-20 flex items-center justify-center transition-all opacity-100 duration-1000'
                >
                    <div onClick={(e) => e.stopPropagation()} className='w-200 h-120 bg-[#777] absolute rounded-md overflow-hidden flex flex-row-reverse'>
                        <div onClick={ () => {
                            setNewsletter(false);
                            setSlideDown(true);
                            setTimeout(() => {
                                setSlideDown(false);
                            }, 3000);
                        } } className="absolute top-2 right-3 cursor-pointer text-3xl">
                            <AiTwotoneCloseCircle />
                        </div>
                        <div className='w-[50%] h-[100%] bg-amber-500'>
                            <img src={NewsletterPic} alt="newsletter-pic" />
                        </div>
                        <div className='flex flex-col gap-5 py-15 mx-auto justify-center items-center text-center'>
                            <img src={Logo} alt="logo" className='w-30' />
                            <h1 className='font-extrabold text-3xl'>Get 20% OFF!</h1>
                            <p className='w-80 -mt-2 font-medium'>Unlock 20% off your first order now, with a chance for 30% off! Sign up with your email to stay in the loop on the latest deals, exclusive offers, and classic football stories delivered straight to your inbox. Plus, find out how to get an additional 10% off on the next step!</p>
                            <div className="flex flex-col gap-3">
                                <input type="email" placeholder='Type you email address' className='px-5 py-2 text-xl rounded-md bg-[#383838] outline-none'/>
                                <button className='w-35  px-5 py-1 bg-[#383838] text-[#bfe0f6] mx-auto rounded-md outline-none text-xl cursor-pointer border-2 border-transparent hover:border-[#bfe0f6]'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            ] : ""}  


            <div 
                onClick={ () => setNewsletter(true)} 
                className={` ${slideDown ? "bottom-0" : " "} ${newsletter ? "-bottom-10" : " "} w-40 h-10 bg-amber-200 rounded-t-md fixed right-10 -bottom-7 transition-all duration-400 hover:bottom-0 text-[#383838] font-bold text-xl text-center pt-2 cursor-pointer z-10`}
            >
                Get 20% Off
            </div>
    </>
  )
}

export default NewsletterPopUp