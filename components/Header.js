import Image from "next/image";
import {SearchIcon, GlobeAltIcon, MenuIcon,UserCircleIcon,UsersIcon} from "@heroicons/react/solid"
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useRouter } from "next/dist/client/router";


const Header = ({placeholder}) => {
    const [userInput, setUserInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);

    const router = useRouter();

    const search = () => {
        router.push({
            pathname: "/search",
            query:{
                location: userInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            }
        })
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const selectionRange = {
        startDate: startDate,
        endDate : endDate,
        key: "selection",
    }

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md bg-white
        py-5 px-5 md:px-10">
            
            {/* left div */}
            <div onClick={() => router.push("/")} 
            className="relative flex items-center h-10
            cursor-pointer my-auto">
                <Image src="/logo.png" layout="fill" objectFit="contain" objectPosition="left"/>
            </div>

            {/* mid */}
            <div className="flex items-center md:border-2 rounded-full
            py-2 md:shadow-sm">
                <input type="text" placeholder={placeholder || "Start your search"}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
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

            {userInput && (
                <div className="col-span-3 mx-auto flex flex-col">
                    <DateRangePicker 
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={['#FD5B61']}
                    onChange={handleSelect}/>

                    <div className="flex items-center border-b mb-4">
                        <h2 className="flex-grow text-2xl font-semibold">Number of Guests</h2>
                        <UsersIcon className="h-5"/>
                        <input
                        value={noOfGuests}
                        onChange={(e) => setNoOfGuests(e.target.value)}
                        min={1}
                        type="number" 
                        className="w-12 pl-2 outline-none text-red-400" />
                    </div>

                    <div className="flex">
                        <button onClick={() => setUserInput('')} className="flex-grow text-gray-500">Cancel</button>
                        <button className="flex-grow text-red-400"
                        onClick={search}>Search</button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
