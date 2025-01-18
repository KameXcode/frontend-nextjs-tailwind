export function Footer(){
    return(
    <div className="flex flex-col w-full h-[500px] items-center  gap-[20px] bg-cute-green   ">
        <div>
            <img src="/assets/images/logo.svg" alt="logo" className="bg-dark-green mt-[100px]"/>
        </div>
        <div className="mt-[35px]">
            <ul className="text-dark-green flex justify-between gap-[50px] font-semibold">
                <li>About</li>
                <li>Service</li>
                <li>Projects</li>
            </ul>
        </div>
        <div className="flex gap-[18px] mt-[100px]">
            <img src="assets/images/icon-facebook.svg" alt="" />
            <img src="assets/images/icon-instagram.svg" alt="" />
            <img src="assets/images/icon-twitter.svg" alt="" />
            <img src="assets/images/icon-pinterest.svg" alt="" />
        </div>
    </div>
    )
}