
export function Services(){
    return(
        <div className="sm:grid sm:grid-cols-2 w-full flex flex-col">
           

            <div className="h-[550px] sm:order-2 ">
                <img src="assets/images/desktop/image-transform.jpg" alt="Ovo" className="w-full font-bold h-[550px]"/>
            </div>
            <div className="h-[550px] flex flex-col items-center justify-center gap-[40px] sm:order-1"  id="transform">
                <div className="flex flex-col gap-[20px] font">  
                    <div className="font-capellina-caps-bold text-[60px] text-light-black flex flex-col">
                        <span>Transform your</span>
                        <span className="-mt-[60px]">brand</span></div>
                    <span className="box md:w-[500px] sm:w-[250px] text-weird-grey" >  We are a full-service creative agency specializing in helping brands grow fast. 
                    Engage your clients through compelling visuals that do most of the marketing for you.</span>
                    <div>
                        <div className=" relative  h-[2px]">
                             <span className="font-capellina-caps-bold tracking-widest text-[22px] ">LEARN MORE</span>
                             <div className="absolute w-[130px] bg-yellow-shadow h-2 -top-[-17px] left-[-4px] rounded-md z-[-1]"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[550px]  sm:order-3" id='taça'>
                <img src="assets/images/desktop/image-stand-out.jpg" className="h-[550px] w-full"></img>
            </div>
            <div className="h-[550px] flex flex-col items-center justify-center gap-[40px] w-full sm:order-4" id="stand">
                <div className="flex flex-col gap-[20px] font">  
                    <div className="font-capellina-caps-bold text-[60px] text-light-black flex flex-col">
                        <span>Stand out to the</span>
                        <span className="-mt-[60px]">right audience</span></div>
                    <span className="box md:w-[500px] sm:w-[250px] text-weird-grey"> Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </span>
                    <div>
                        <div className=" relative  h-[2px]">
                             <span className="font-capellina-caps-bold tracking-widest text-[22px] ">LEARN MORE</span>
                             <div className="absolute w-[130px] bg h-2 bg-pink-shadow -top-[-17px] left-[-4px] rounded-md z-[-1]"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[600px]  sm:h-[550px] bg-cereja-image w-full flex flex-col bg-center justify-end gap-[20px] sm:order-5">
                <div className="self-center ">
                    <span className="font-capellina-caps-bold text-[40px] text-darker-green">Graphic Design</span>
                </div>
                <div className="self-center mb-[40px] sm:w-[250px] w-[250px]">
                    <span className="text-dark-green font-bold  text-center"> Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</span>
                </div>
            </div>

            <div className="h-[600px] sm:h-[550px] bg-photography-image bg-center flex flex-col justify-end gap-[20px]  sm:order-6">
                <div className="self-center md:w-[500px]  w-[250]">
                    <span className="font-capellina-caps-bold text-[40px] text-darker-green">Graphic Design</span>
                </div>
                <div className="self-center mb-[40px] sm:w-[500px] w-[250px]">
                    <span className="text-dark-green font-bold  text-center leading-relaxed "> Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</span>
                </div>
            </div>
            
        </div>
    )    
}
export default Services;