import '../App.css'
const Banner = () => {
    return (
        <div className="container mx-auto font">
            <div className='banner-image rounded-3xl mb-[50px] md:mb-[100px]'>
                <div className="bg-gradient-to-t from-slate-900 via-transparent to-transparent h-[750px] rounded-3xl">
                    <div className='flex flex-col justify-center items-center h-full'>
                    <h2 className='text-white text-center text-[30px] md:text-[52px] font-bold md:leading-[76px] '>Discover an exceptional cooking <br></br>class tailored for you!</h2>
                    <p className="text-white pt-6 text-center md:text-xl  font-normal leading-[30px]">
                    Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding<br></br> problems to become an exceptionally well world-class Programmer.
                    </p>
                    <div className='flex gap-6 justify-center items-center mt-10'>
                        <button type="button" className='text-black bg-[#0BE58A] px-4 md:px-[30px] py-4 md:py-[20px] rounded-full md:text-xl font-semibold'>Explore Now</button>
                        <button type="button" className='text-white px-4 md:px-[30px] py-4 md:py-[20px] rounded-full border-[1px] border-white md:text-xl font-semibold'>Our Feedback</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className='text-center mb-7 md:mb-12'>
                <h3 className='text-[#150B2B] text-[30px] md:text-[40px] font-semibold pb-4 md:pb-6'>Our Recipes</h3>
                <p className='text-[16px] font-normal leading-[28px] text-[#150b2b99]'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget<br></br> urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
        </div>
    );
};

export default Banner;