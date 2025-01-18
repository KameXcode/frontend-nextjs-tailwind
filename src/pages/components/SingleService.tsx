interface SingleServiceProps{
    title:string,
    titleBreak:string,
    text:string
    learnMoreShadowColor:string

}

export function SingleService({title, text, titleBreak, learnMoreShadowColor}:SingleServiceProps){
    return(
    <div className="h-[500px] flex flex-col items-center justify-center gap-[40px]">
        <div className="flex flex-col gap-[20px] font">  
            <div className="font-capellina-caps-bold text-[60px] text-light-black flex flex-col">
                <span>{title}</span>
                <span className="-mt-[60px]">{titleBreak}</span>
            </div>
            <span className="box w-[500px] text-weird-grey"> {text}</span>
            <div>
                <div className="relative h-[2px]">
                    <span className={`font-capellina-caps-bold ${learnMoreShadowColor} tracking-widest text-[22px]`} >LEARN MORE</span>
                    <div className="absolute w-[130px] bg-yellow-shadow h-2 -top-[-17px] left-[-4px] rounded-md z-[-1]"></div>
                </div>
            </div>
        </div>
    </div>
    )
}