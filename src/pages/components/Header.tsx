import Image from "next/image"
import Link from "next/link"
export function Header(){
    return(
    <>
    <header className="bg-header-image h-[760px] bg-cover bg-center bg-no-repeat w-full pt-[30px] pl-[40px] pr-[60px] flex flex-col"  >
        <nav className="w-full flex  space-between gap-10 ">
            <div >
                <Image src={"/assets/images/logo.svg" } layout="intrinsic" width={124} height={24} alt="Logo"/>
            </div>
            <div className="ml-auto flex justify-between hidden md:flex space- gap-5">
                <ul className="flex justify-between gap-5  color text-white">
                    <li className="box"><Link href={""}>About</Link></li>
                    <li className="box"><Link href={""}>Services</Link></li>
                    <li className="box"><Link href={""}>Projects</Link></li>
                </ul>
                <button className="bg-white  w-[125px] h-[48px] -mt-[8px] rounded-full font-capellina-caps-bold text-[27px]">contact</button>
            </div>
            <div className="ml-auto md:hidden" >
                <Image src={"assets/images/icon-hamburger.svg"} alt="hamburuger-menu" width={30} height={30} ></Image>
            </div>
        </nav>
        <span className="self-center mt-[70px] font-capellina-caps-bold text-[60px] tracking-widest font-[2000] text-white">WE ARE CREATIVES</span>
        <div className=" self-center mt-[100px]">
            <Image  height={128} width={32} src={"/assets/images/icon-arrow-down.svg"} alt="seta pra baixo" className=" ">
            </Image>
        </div>    
        </header>
    </>
    )
}
export default Header