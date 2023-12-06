import Hero from "./ui/hero";
import OverView from "./ui/overView";
import HomeServices from "./ui/homeServices";
import Testimonials from "./ui/testimonials";

export default function Page(){
  return(
      <div>
        <Hero />
        <OverView />
        <HomeServices />
        <Testimonials />
        <p className="px-[var(--px)]">index</p>
      </div>
  )
}