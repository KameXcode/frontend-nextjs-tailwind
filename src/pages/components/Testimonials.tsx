export function Testimonials(){
    return(
    <div className="flex flex-col items-center justify-center mt-[100px] h-[1000px]">
        <div className="font-capellina-caps-bold text-gray-400 text-[35px] mb-[100px] tracking-widest ">
            CLIENT TESTIMONIALS
        </div>
        <div className="flex justify-between gap-[40px] w-[70%]">
            <div className="flex flex-col items-center">
                <img src="/assets/images/image-emily.jpg" alt=""  className="rounded-full "/>
                <span className='text-center leading-relaxed text-gray-600 mt-[60px] font-bold'>
                    We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                </span>
                <span className="text-light-black mt-[30px]">
                    Emily R.
                </span>
                <span className="text-weird-grey mt-[5px] font-semibold">
                    Marketing director
                </span>
            </div>
            <div className="flex flex-col items-center">
            <img src="/assets/images/image-thomas.jpg" alt="" className="rounded-full"  />
                <span className='text-center leading-relaxed text-gray-600 mt-[60px] font-bold'>
         We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                </span>
                <span className="text-light-black mt-[30px]">
                    Thomas S.
                </span>
                <span className="text-weird-grey mt-[5px] font-semibold">
                    Chief Operating Officer
                </span>
            </div>
            <div className="flex flex-col items-center">
            <img src="/assets/images/image-jennie.jpg" alt="" className="rounded-full"  />
                <span className='text-center leading-relaxed text-gray-600 mt-[60px] font-bold'>
         We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                </span>
                <span className="text-light-black mt-[30px]">
                    Jennie F.
                </span>
                <span className="text-weird-grey mt-[5px] font-semibold">
                    Business Owner
                </span>
            </div>
        </div>
    </div>
    )
}
export default Testimonials