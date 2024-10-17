import HeroSection from "./components/HeroSection"
import OverviewSection from "./components/OverviewSection"
import ShortServicesSection from "./components/ShortServicesSection"
import TestimonialSection from "./components/TestimonialSection"

function HomeView () {
    return (
        <div>
            <HeroSection/>
            <OverviewSection/>
            <ShortServicesSection/>
            <TestimonialSection/>
        </div>
    )
}

export default HomeView;