

const FindHome = () => {
    return (
        <section className="3xl:px-32 xl:px-24 px-4 my-12">
            <div className="bg-[#F7F7FD] border w-full  md:flex gap-6 justify-between items-center ">
                <div className="md:w-full p-6 ">
                    <h2 className="text-4xl font-bold  py-4">The new way to find home</h2>
                    <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint laboriosam, minima placeat quia nobis numquam illo esse neque expedita, amet sunt, Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <div>
                        <div className="stats stats-vertical lg:stats-horizontal shadow">

                            <div className="stat">
                                <div className="stat-title">Downloads</div>
                                <div className="stat-value">31K</div>
                                <div className="stat-desc">Jan 1st - Feb 1st</div>
                            </div>

                            <div className="stat">
                                <div className="stat-title">New Users</div>
                                <div className="stat-value">4,200</div>
                                <div className="stat-desc">↗︎ 400 (22%)</div>
                            </div>

                            <div className="stat">
                                <div className="stat-title">New Registers</div>
                                <div className="stat-value">1,200</div>
                                <div className="stat-desc">↘︎ 90 (14%)</div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="md:w-full">
                    <img className="w-full justify-end" src="https://i.ibb.co/7z13CD9/wepik-export-20230623093819-FRJa.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default FindHome;