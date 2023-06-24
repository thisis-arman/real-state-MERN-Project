import FindHome from "../../Components/HomeCompo/FindHome";
import HeroSection from "../../Components/HomeCompo/HeroSection";
import Houses from "../../Components/HomeCompo/Houses";
import TenantsSection from "../../Components/HomeCompo/TenantsSection";
import Testimonials from "../../Components/HomeCompo/Testimonials";


const Home = () => {
    return (
        <div>
           <HeroSection/>
           <TenantsSection/>
           <FindHome/>
           <Houses/>
           <Testimonials/>
        </div>
    );
};

export default Home;