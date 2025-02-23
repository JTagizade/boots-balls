import { LiaShippingFastSolid, LiaMoneyCheckAltSolid } from "react-icons/lia";
import { HiOutlineBadgeCheck } from "react-icons/hi";




const Benefits = () => {
  return (
    <>
      <div className="w-full h-40 bg-[#bfe0f6] mt-50 flex gap-10 text-[#383838] px-60 benefits-shadow">
        <div className="flex items-center gap-5">
           <LiaMoneyCheckAltSolid className="text-8xl"/>
           <p className="font-medium">Save 20% on your order when you subscripe to our newsletter.</p>
        </div>
        <div className="flex items-center gap-5">
           <LiaShippingFastSolid className="text-8xl"/>
           <p className="font-medium">You always get free shipping on orders over 70$</p>
        </div>
        <div className="flex items-center gap-5">
           <HiOutlineBadgeCheck className="text-8xl"/>
           <p className="font-medium">We offer a 30-day money-back guarantee on all your orders.</p>
        </div>
      </div>
    </>
  )
}

export default Benefits