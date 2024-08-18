import { navLists } from "../constants"
import { appleImg, bagImg, searchImg } from "../utils"

const Navbar = () => {
    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
            <nav className="flex w-full screen-max-width">
                <div><img src={appleImg} alt='logo' className="w-[18px] h-[18px] cursor-pointer" /></div>
                <div className="flex flex-1 justify-center items-center max-sm:hidden">
                    {navLists.map((nav, i) => (
                        <div className="mx-4 px-1 text-sm text-gray hover:text-white transition-all cursor-pointer" key={i}>
                            {nav}
                        </div>
                    ))}
                </div>
                <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                    <img src={searchImg} alt='search icon' className="w-[18px] h-[18px] cursor-pointer" />
                    <img src={bagImg} alt='search icon' className="w-[18px] h-[18px] cursor-pointer" />
                </div>
            </nav>
        </header>
    )
}

export default Navbar