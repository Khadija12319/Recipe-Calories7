import { FaRegUserCircle} from "react-icons/fa";
import '../App.css'
const Header = () => {
    return (
        <div>
            <div className="container mx-auto flex flex-col lg:flex-row justify-between my-8 md:my-[50px] font">
                <h1 className="text-[#150B2B] text-[32px] font-bold text-center lg:text-left">Recipe Calories</h1>
                <div className="my-auto">
                    <ul className="flex md:gap-12 gap-6 my-auto justify-center items-center py-4 lg:py-0">
                        <li className="text-[#150b2b] text-lg font-normal"><a href="">Home</a></li>
                        <li className="text-[#150b2b] text-lg font-normal"><a href="">Recipes</a></li>
                        <li className="text-[#150b2b] text-lg font-normal"><a href="">About</a></li>
                        <li className="text-[#150b2b] text-lg font-normal"><a href="">Search</a></li>
                    </ul>
                </div>
                <div className="flex gap-4 justify-center lg:justify-end">
                    <input type="text" name="" id="" placeholder="Search" className="lg:w-[260px] bg-[#150b2b0a] placeholder: pl-4 rounded-full"/>
                    <figure className="bg-[#0BE58A] rounded-full my-auto">
                        <span className="my-auto"><FaRegUserCircle className="text-3xl m-2"/></span>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Header;