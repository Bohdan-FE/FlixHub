import { getYears } from "@/app/lib/getYears";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const YearInput = ({ setSelectedYear, selectedYear, isActive, setIsActive }: {
    setSelectedYear: React.Dispatch<React.SetStateAction<string>>, selectedYear: string, isActive: {
        sort: boolean;
        genres: boolean;
        year: boolean;
    }, setIsActive: React.Dispatch<React.SetStateAction<{
        sort: boolean;
        genres: boolean;
        year: boolean;
    }>>
}) => {

    const years = getYears()
    return (
        <div className="filter:w-[148px] h-[48px] relative text-[18px] leading-5 font-medium bg-neutral-800 rounded-2xl w-full">
            <div className="relative px-[18px] py-[14px] rounded-[14px] bg-selectBg flex items-center justify-between">
                <div className="absolute w-full h-full top-0 left-0 cursor-pointer z-10" onClick={() => setIsActive(prev => ({ ...prev, year: !prev.year }))}></div>
                <p>{selectedYear ? selectedYear : 'All years'}</p>
                <IoIosArrowDown className={`${isActive.year && 'rotate-180'}`} />
            </div>
            {isActive.year && <div className=" w-full h-[400px] pl-[18px] pr-2 py-[14px] bg-neutral-800 rounded-2xl absolute top-[52px] z-10 left-0 border-[1px] border-neutral-900">
                <div className="h-full text-[16px] text-neutral-500 overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-500 scrollbar-thumb-rounded-full">
                    <div className="mb-3 last:mb-0" key='0'>
                        <input type="radio" id='all' name='all' value='' hidden checked={selectedYear.length === 0} onChange={() => { setSelectedYear(''); setIsActive(prev => ({ ...prev, year: false })) }} />
                        <label htmlFor='all' className={`cursor-pointer ${selectedYear.length === 0 && 'text-neutral-200'}`}>All years</label>
                    </div>
                    {years.map(year =>
                        <div className="mb-3 last:mb-0" key={year}>
                            <input type="radio" id={year} name={year} value={year} hidden checked={selectedYear === year} onChange={() => { setSelectedYear(year); setIsActive(prev => ({ ...prev, year: false })) }} />
                            <label htmlFor={year} className={`cursor-pointer ${selectedYear === year && 'text-neutral-200'}`}>{year}</label>
                        </div>)}
                </div>
            </div>}
        </div>
    )
}