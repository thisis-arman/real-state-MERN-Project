import FindHome from "../../Components/HomeCompo/FindHome";
import HeroSection from "../../Components/HomeCompo/HeroSection";
import Houses from "../../Components/HomeCompo/Houses";
import TenantsSection from "../../Components/HomeCompo/TenantsSection";


const Home = () => {
    return (
        <div>
           <HeroSection/>
           <TenantsSection/>
           <FindHome/>
           <Houses/>
        </div>
    );
};

export default Home;