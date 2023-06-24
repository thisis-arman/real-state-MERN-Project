import { FaHome } from 'react-icons/fa';

const TenantsSection = () => {
    return (
        <section className="3xl:px-32 xl:px-24 px-4 my-12">
           <div className="md:flex justify-between items-center gap-6">
           <div className="md:w-3/6 rounded">
                <img className="md:w-4/5 rounded-md" src="https://i.ibb.co/bzWx13F/modern-style-house-exterior-with-terrace.jpg" alt="" />
                <div className="bg-base-100 md:w-80 w-72 mx-auto md:mx-10 shadow-2xl p-4 rounded-lg relative -top-16">
                <FaHome className='text-white h-10 w-10 absolute -top-6 bg-blue-600 border rounded-full p-2 left-60'/>
                    <h4 className="text-lg font-bold">Find the best deal </h4>
                    <p>Browse thousands of properties</p>
                </div>
            </div>
            <div className="md:w-3/6">
                <div className="bg-base-200 p-2 rounded w-60 border-2 my-6 ">
                    <button className="btn btn-outline">Tenants</button>
                    <button className="btn btn-neutral">LandLords</button>

                </div>
                <h2 className="text-4xl font-bold">
                    We make it easy for tenants and landlords

                </h2>
                <p className="text-lg py-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nisi laborum error doloremque neque ducimus, dolorem molestias delectus quaerat natus.

                </p>
                <button className="btn btn-primary">See More</button>
            </div>
           </div>
        </section>
    );
};

export default TenantsSection;