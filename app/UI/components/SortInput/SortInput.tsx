import { useState } from "react";

function SortInput({ setSelectedSort, selectedSort }: { setSelectedSort: React.Dispatch<React.SetStateAction<string>>, selectedSort: string }) {
    const [isActive, setIsActive] = useState(false)
    const sortTypes = [
        { type: 'popularity.desc', name: 'Most popular' },
        { type: 'popularity.asc', name: 'Most unpopular' },
        { type: 'primary_release_date.desc', name: 'Newest' },
        { type: 'primary_release_date.asc', name: 'Oldest' },
        { type: 'vote_average.asc', name: 'Lowest rating' },
        { type: 'vote_average.desc', name: 'Highest rating' }
    ]
    const selectedName = sortTypes.find(type => type.type === selectedSort)

    return (
        <div className="w-[224px] h-[48px] relative text-[18px] leading-5 font-medium">
            <div className="px-[18px] py-[14px] rounded-[14px] bg-selectBg flex items-center justify-between cursor-pointer" onClick={() => setIsActive(!isActive)}>
                <p>{selectedSort ? selectedName?.name : 'Sort by'}</p>
                {/* <ArrowSvg className={`${isActive && 'rotate-180'}`} /> */}
            </div>
            {isActive && <div className="h-[272px] w-full pl-[18px] pr-2 py-[14px] bg-white absolute top-[52px] z-10 rounded-[14px] left-0 border-[1px] border-[rgba(18, 20, 23, 0.05)] overflow-hidden">
                <div className="overflow-y-scroll h-full text-[16px] text-greyText">
                    {sortTypes.map(sortType =>
                        <div className="mb-2 last:mb-0" key={sortType.type}>
                            <input type="radio" id={sortType.type} name='model' value={sortType.type} hidden checked={selectedSort === sortType.type} onChange={() => { setSelectedSort(sortType.type); setIsActive(!isActive) }} />
                            <label htmlFor={sortType.type} className={`cursor-pointer ${selectedSort === sortType.type && 'text-blackText'}`}>{sortType.name}</label>
                        </div>)}
                </div>
            </div>}
        </div>
    );
}

export default SortInput;