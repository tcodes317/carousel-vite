import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";


function Carousel({ children: slides }){
    
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () => setCurr((curr) => (curr === slides.length -  1 ? 0 : curr + 1))
    return(
        <div>
                <div className="overflow-hidden w-[100%] mx-auto relative border-2 border-black">
                    <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)`}}>{slides}</div>
                    <div className="absolute p-4 inset-0 w-full flex items-center justify-between">
                        <button onClick={prev} className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white">
                            <ChevronLeft size={40} />
                        </button>
                        <button onClick={next} className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white">
                            <ChevronRight size={40} />
                        </button>
                    </div>

                
                    <div className="absolute bottom-5 right-0 left-0">
                        <div className="flex items-center justify-center gap-2">
                            {slides.map((_, i)=>(
                                <div className={`transition-all w-2 h-2 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`} />
                            ))}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Carousel;