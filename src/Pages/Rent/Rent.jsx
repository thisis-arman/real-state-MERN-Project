import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBath } from "react-icons/bi";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { MdOutlineBed } from "react-icons/md";
import { Link } from "react-router-dom";


const Rent = () => {
    const [houses ,setHouses]=useState([])

    useEffect(()=>{
        fetch('/public/data.json')
        .then(res => res.json())
        .then(data => setHouses(data))
    },[])

    return (
        <div className="bg-[#F7F7FD]">
          <section className="3xl:px-32 xl:px-24 px-4 py-12 ">
            <div className="md:flex justify-between py-8 ">
                <div>
                <h2 className="text-4xl font-bold">Search properties for rent</h2>
                <p className="py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <button className="btn btn-primary">Browse Properties</button>
            </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {
                houses.map((house,i)=>
                <Link to='' key={i} className="card rounded-md md:w-96 bg-base-100 shadow-sm hover:shadow-xl">
  <figure><img src={house.image} alt="Shoes" /></figure>
  <div className="card-body">
   <div className="flex justify-between ">
   <h2 className="card-title"><span className="text-blue-500 font-bold">${house.price}</span>/monthly</h2>
   <span className="border-2 rounded-full p-2">
   <AiOutlineHeart className='w-8 h-8'/>
   </span>
   </div>
    <h2 className="card-title">{house.house_name}</h2>
    <p>{house.address}</p>
    <hr />
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    <div className="flex justify-between">
        <span><MdOutlineBed className="text-blue-500 w-6 h-6 inline"/> {house.bedrooms} Beds</span>
        <span><BiBath className="text-blue-500 w-6 h-6 inline"/>  {house.bathrooms} Bathrooms</span>
        <span><HiOutlineArrowPathRoundedSquare className="text-blue-500 w-6 h-6 inline"/> {house.area} ft</span>
    </div>
    <div className="card-actions justify-end">
      {/* <button className="btn btn-primary">Buy Now</button> */}
    </div>
  </div>
</Link>
                
                )
            }
        </div>
            
        </section>    
        </div>

    );
};

export default Rent;