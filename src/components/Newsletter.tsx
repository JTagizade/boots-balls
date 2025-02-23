
const Newsletter = () => {
  return (
    <>
          <div className="w-full h-40 bg-[#202324] flex gap-14 px-60 items-center justify-between">
            <div className="flex flex-col gap-5">
               <h1 className="text-2xl font-bold leading-4">Join the Internet's largest Classic Football newsletter</h1>
               <p className="font-medium text-[#98a1a4]">We'll send you articles, product guides, and exclusive offers customized to your interest.</p>
            </div>
            <div className="flex items-center gap-5">
               <input type="email" placeholder="type your email here" name="email" className="p-5 text-xl rounded-md bg-[#383838] outline-none"/>
               <button className="w-35 h-17 bg-[#383838] text-[#bfe0f6] rounded-md outline-none text-2xl cursor-pointer border-2 border-transparent hover:border-[#bfe0f6]">Submit</button>
            </div>
          </div>
        </>
  )
}

export default Newsletter