import { Link } from "react-router-dom";


const HeroSection = () => {
    return (
        <section className="3xl:px-32 xl:px-24 px-4 bg-base-200">
            <div className="md:flex justify-between gap-6 py-20 w-full">
            <div className="md:w-2/5">
            <h1 className="text-6xl  font-extrabold">
               Buy,rent or sell you property easily
               </h1>
               <p className="text-xl py-4">A great platform to buy and sell or even rent your properties without any commisions</p>
               <button className="btn btn-primary"><Link to='/'>Browse Properties</Link></button>
            </div>
               <div className="md:w-3/5">
                <img src="https://i.ibb.co/PYDN8nD/wepik-export-20230623031835q-Yd-D.png" alt="image" />
               </div>
            </div>
            
        </section>
    );
};

export default HeroSection;