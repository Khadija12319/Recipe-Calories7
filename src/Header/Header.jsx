import { FaRegUserCircle} from "react-icons/fa";
const Header = () => {
    return (
        <div>
            <div className="container mx-auto flex justify-between my-[50px]">
                <h1 className="text-[#150B2B] text-[32px] font-bold">Recipe Calories</h1>
                <div className="my-auto">
                    <ul className="flex gap-12 my-auto">
                        <li className="text-[#150b2b] text-lg font-normal">Home</li>
                        <li className="text-[#150b2b] text-lg font-normal">Recipes</li>
                        <li className="text-[#150b2b] text-lg font-normal">About</li>
                        <li className="text-[#150b2b] text-lg font-normal">Search</li>
                    </ul>
                </div>
                <div className="flex gap-4">
                    <input type="text" name="" id="" placeholder="Search" className="w-[260px] bg-[#150b2b0a] placeholder: pl-4 rounded-full"/>
                    <figure className="bg-[#0BE58A] rounded-full">
                        <span className=""><FaRegUserCircle className="text-3xl m-2"/></span>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Header;