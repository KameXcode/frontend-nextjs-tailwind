import Image from "next/image"
export function Gallery(){
   return(
   <div className="grid grid-cols-2 sm:flex w-[100%] ">
        <img src="assets/images/desktop/image-gallery-milkbottles.jpg" alt="" className=" sm:max-w-[25%] object-cover" />
        <img src="assets/images/desktop/image-gallery-orange.jpg" alt="" className=" sm:max-w-[25%] object-cover" />
        <img src="assets/images/desktop/image-gallery-cone.jpg" alt="" className=" sm:max-w-[25%] object-cover" />
        <img src="assets/images/desktop/image-gallery-sugarcubes.jpg" alt="" className=" sm:max-w-[25%] object-cover" />
    </div>
   )
}
export default Gallery