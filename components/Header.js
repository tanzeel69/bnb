import Image from "next/image";
import {SearchIcon, GlobeAltIcon, MenuIcon,UserCircleIcon,UsersIcon} from "@heroicons/react/solid"

const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md bg-white
        py-5 px-5 md:px-10">
            
            {/* left div */}
            <div className="relative flex items-center h-10
            cursor-pointer my-auto">
                <Image src="/logo.png" layout="fill" objectFit="contain" objectPosition="left"/>
            </div>
            {/* mid */}


            <div className="flex items-center md:border-2 rounded-full
            py-2 md:shadow-sm">
                <input type="text" placeholder="Start your search" 
                className="pl-5 bg-transparent outline-none
                flex-grow text-gray-600 placeholder-gray-400"/>
                <SearchIcon className="h-8 bg-red-400 hidden
                md:inline md:mx-2 text-white rounded-full p-2 cursor-pointer"/>
            </div>

            {/* right */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer"/>
                <div  className="flex space-x-2 border-2 rounded-full items-center p-2">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>
        </header>
    )
}

export default Header
