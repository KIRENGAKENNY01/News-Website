import News from "./News";



function Hero(){

   return (
     <div className="grid grid-cols-1 gap-y-6 px-4  lg:grid-cols-[auto_auto] lg:justify-between lg:gap-x-6">
        <div className="grid grid-cols-1 gap-7">
            
                 <picture>
                           <source media="(min-width:768px)" srcSet="/image-web-3-desktop.jpg" />
                           <img src="/image-web-3-mobile.jpg" alt="a toy background" className="w-full h-auto object-cover " />
                     </picture>
            

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 ">
            <h1 className="text-[#00001A]  text-[45px] lg:text-[55px]  font-extrabold">The Bright Future of Web 3.0?</h1>
            <div className="grid grid-cols-1 gap-7 ">
                <p className="leading-loose text-[15px]">We dive into the next evolution of the web that <br/>
                 claims to put the power of the platforms back <br/>
                 into the hands of the people.But is it really <br/>
                 fulfilling its promise?
                   </p>
                   <button className="bg-[#F15E50] text-[#00001A] h-[50px] w-[180px] font-medium tracking-widest hover:bg-[#00001A] hover:text-[#fff] ">
                    READ MORE
                   </button>

            </div>
          </div>
        </div>
        
      <News/>
        
    </div>
   )


}

export default Hero;