import { Header } from "./components/Header";
import { Gallery } from "./components/Gallery";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
export default function Home() {
  return (
   <>
      <div className="flex flex-col">
        <Header/>
        <Services/>
        <Testimonials/>
        <Gallery/>
        <Footer/>
      </div>
   </>
  );
}
