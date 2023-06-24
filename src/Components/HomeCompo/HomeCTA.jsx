

const HomeCTA = () => {
    return (
        <div>
            <div className="hero  bg-[#110B56]" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content py-16">
                    <div className="max-w-md">
                        <h4 className="text-blue-400 font-bold text-lg">No Spam Promise</h4>
                        <h1 className="mb-5 text-5xl font-bold">Are you a landlord</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                        <div className="join ">
                            <input className="input input-bordered join-item" placeholder="Email" />
                            <button className="btn join-item bg-blue-500 ">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCTA;