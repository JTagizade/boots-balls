// React Hooks
import { useState } from "react";
// Icons
import { BiSortDown } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

// Define the props interface
interface SortByProps {
    sortOption: string; 
    setSortOption: (option: string) => void;
}

const tailwindClasses = {
    sortMethod: "w-full h-11 py-2 px-3 bg-gray-700 cursor-pointer hover:bg-amber-600 hover:text-[#383838] hover:border-b-white flex gap-2 items-center"
}

const SortBy: React.FC<SortByProps> = ({ sortOption, setSortOption }) => {
    const [clicked, setClicked] = useState(false);
    const [selected, setSelected] = useState(false);

    const initialSortByOptions = ['Default', 'A-Z', 'Z-A', 'Price, Low to High', 'Price, High to Low', 'Old to New', 'New to Old'];
    const afterSelected = initialSortByOptions.slice(1, 7);

    const sortByOptions = selected ? initialSortByOptions : afterSelected;

    return (
        <>
            <div className={` ${clicked ? 'border delay-150 z-10' : 'border-transparent'} flex flex-col w-55 border absolute right-1 top-2.5 rounded-xl overflow-hidden`}>
                <div 
                    onClick={() => setClicked(!clicked)} 
                    className={` ${clicked ? 'border-b-white bg-gray-700' : 'border-b-transparent rounded-xl'} flex border-b items-center gap-2 h-11 p-2 cursor-pointer z-20 hover:bg-amber-600`}
                >
                    <BiSortDown className="text-xl"/>
                    {sortOption}
                    <FaChevronDown className={` ${clicked ? '-rotate-180' : ''} absolute right-3 transition-transform duration-300`}/>
                </div>

                <div className={` ${clicked ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'} flex flex-col rounded-xl transition-transform duration-200 ease-in-out transform`}>
                    {sortByOptions.map((option, i) => (
                        <div 
                            key={option}
                            className={`${i === sortByOptions.length - 1 ? 'rounded-b-xl' : 'border-b'} ${tailwindClasses.sortMethod}`}
                            onClick={() => {
                                setSelected(true);
                                setClicked(!clicked);
                                return setSortOption(option);
                            }}
                        >
                            {option} {sortOption === option ? (<TiTick />) : ''}
                        </div>
                    ))}            
                </div>
            </div>
        </>
    )
}

export default SortBy;
