import bannerImage from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div
            className="hero w-11/12 mx-auto mt-4 rounded-3xl"
            style={{
                backgroundImage: `url(${bannerImage})`,
                objectFit: 'contain'
            }}>
            <div className="hero-overlay bg-opacity-40 rounded-3xl"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="mt-24">
                    <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-5">
                    Join our hands-on courses to master culinary techniques, explore global cuisines, and elevate your cooking skills to new heights.
                    </p>
                    <div className='space-x-6 pt-4 pb-24'>
                        <button className="btn bg-[#0BE58A] rounded-[50px] border-none">Explore Now</button>
                        <button className="btn rounded-[50px] border border-white">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;