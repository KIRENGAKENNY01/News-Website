import Keyboard from "/public/image-top-laptops.jpg"
import Pcs from "/public/Pcs.jpg"
import Gaming from "/public/image-gaming-growth.jpg"
import Image from "next/image"


function Card(){
    const data=[
        {id:1,number:"01", image:Pcs,title:"Reviving Retro Pcs", paragraph:"What happens when old pcs are given modern upgrades?",alt:"Old PCs"},
        {id:2,number:"02", image:Keyboard,title:"Top 10 Laptops of 2022", paragraph:"Our best picks for various needs and budgets",alt:"black Keyboard with Red letters"},
        {id:3,number:"03", image:Gaming,title:"The Growth of Gaming", paragraph:"How the pandemic has sparked fresh opportunities", alt:"a gaming console above a hand in air"},
    ]

    return (
        <div className="grid grid-cols-1 gap-y-12 px-4  lg:grid-cols-3 lg:gap-x-6  mt-20">
            {data.map((info)=>(
                <div
                key={info.id}
                className="flex gap-5"
                >
                   <Image src={info.image} alt={info.alt} className="w-[150px] h-auto lg:w-[150px] lg:h-auto"/>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[30px] text-[#F15E50] font-bold">{info.number}</h1>
                        <h1 className="text-[#00001A] font-bold hover:text-[#F15E50]">{info.title}</h1>
                        <p>{info.paragraph}</p>
                    </div>
                    

                </div>
            ))}
        </div>
    )

}

export default Card; 