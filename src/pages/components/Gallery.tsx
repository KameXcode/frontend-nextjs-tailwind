import Image from "next/image"
export function Gallery(){
   return(
   <div className="grid grid-cols-2 sm:flex w-[100%] ">
        <Image src="/assets/images/desktop/image-gallery-milkbottles.jpg" width={720} height={894} alt="milkbottle" className="sm:max-w-[25%] object-cover"/>
        <Image src="/assets/images/desktop/image-gallery-orange.jpg" width={720} height={894} alt="milkbottle" className="sm:max-w-[25%] object-cover"/>
        <Image src="/assets/images/desktop/image-gallery-cone.jpg" width={720} height={894} alt="milkbottle" className="sm:max-w-[25%] object-cover"/>
        <Image src="/assets/images/desktop/image-gallery-sugarcubes.jpg" width={720} height={894} alt="milkbottle" className="sm:max-w-[25%] object-cover"/>    
    </div>
   )
}
export default Gallery