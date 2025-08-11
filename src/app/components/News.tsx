



function News(){

    const data=[
        {id:1,title:"Hydrogen VS Electric Cars", subtext:"Will Hydrogen-fueled cars ever catch up to EVs?" },
        {id:2,title:"The Downsides of AI Artistry ", subtext:"What are the possible adverse effects of on-demand AI image generation?" },
        {id:3,title:"Is VC Funding Drying Up?", subtext:"Private funding by VC firms is down 50% YOY. We take  at what that means." }
    ]

    return (
     <div className=" w-[350px] mx-auto lg:w-[400px]   bg-[#00001A]">
        <div className="flex flex-col px-8 py-8">
            <h1 className=" font-extrabold text-[35px] text-[#E9AB53] mb-5">New</h1>
            {data.map((info)=>(
                <div key={info.id} className="py-2">
                    <h1 className="text-lg font-extrabold text-white hover:text-[#E9AB53]" > {info.title} </h1>
                    <p>{info.subtext} </p>
                    <div className="border-b-2 border-[] mt-10" ></div>
                </div>
            ))}
        </div>

     </div>
    )
}

export default News; 