export function Header(){
    return(
    <>
    <header className="bg-header-image h-[760px] bg-cover bg-center bg-no-repeat w-full pt-[30px] pl-[40px] pr-[60px] flex flex-col"  >
        <nav className="w-full flex  space-between   gap-10">
            <div >
                <img  src="/assets/images/logo.svg"></img>
            </div>
            <div className="ml-auto flex justify-between gap-5">
                <ul className="flex justify-between gap-5  color text-white">
                    <li className="">
                        <span>About</span>
                    </li>
                    <li className="box"><span>Services</span></li>
                    <li><span>Projects</span></li>
                </ul>
                <button className="bg-white  w-[125px] h-[48px] -mt-[8px] rounded-full font-capellina-caps-bold text-[27px]">contact</button>
            </div>
        </nav>
        <span className="self-center mt-[70px] font-capellina-caps-bold text-[60px] tracking-widest font-[2000] text-white">WE ARE CREATIVES</span>
        <img src="/assets/images/icon-arrow-down.svg" alt="seta pra baixo" className="h-28 w-8 self-center mt-[50px]" />
    </header>
    </>
    )
}