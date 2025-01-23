import Image from "next/image";
export function Footer(){
    return(
    <div className="flex flex-col w-full h-[500px] items-center  gap-[20px] bg-cute-green   ">
        <div>
            <Image src="/assets/images/logo.svg" width={124} height={24} alt="logo" className="bg-dark-green mt-[100px]"/>
        </div>
        <div className="mt-[35px]">
            <ul className="text-dark-green flex justify-between gap-[50px] font-semibold">
                <li>About</li>
                <li>Service</li>
                <li>Projects</li>
            </ul>
        </div>
        <div className="flex gap-[18px] mt-[100px]">
            <Image src="/assets/images/icon-facebook.svg" width={20} height={20} alt="facebook"/>
            <Image src="/assets/images/icon-instagram.svg" width={20} height={20} alt="instagram"/>
            <Image src="/assets/images/icon-twitter.svg" width={20} height={20} alt="twitter"/>
            <Image src="/assets/images/icon-pinterest.svg" width={20} height={20} alt="facebook"/>
        </div>
    </div>
    )
}
export default Footer;