import { IoIosArrowDown } from "react-icons/io";


const sortTypesMovie = [
    { type: 'popularity.desc', name: 'Most popular' },
    { type: 'popularity.asc', name: 'Most unpopular' },
    { type: 'primary_release_date.desc', name: 'Newest' },
    { type: 'primary_release_date.asc', name: 'Oldest' },
    { type: 'vote_average.asc', name: 'Lowest rating' },
    { type: 'vote_average.desc', name: 'Highest rating' }
]

const sortTypesTV = [
    { type: 'popularity.desc', name: 'Most popular' },
    { type: 'popularity.asc', name: 'Most unpopular' },
    { type: 'first_air_date.desc', name: 'Newest' },
    { type: 'first_air_date.asc', name: 'Oldest' },
    { type: 'vote_average.asc', name: 'Lowest rating' },
    { type: 'vote_average.desc', name: 'Highest rating' }
]

function SortInput({ setSelectedSort, selectedSort, isActive, setIsActive, type }: {
    setSelectedSort: React.Dispatch<React.SetStateAction<string>>, type: string, selectedSort: string, isActive: {
        sort: boolean;
        genres: boolean;
        year: boolean;
    }, setIsActive: React.Dispatch<React.SetStateAction<{
        sort: boolean;
        genres: boolean;
        year: boolean;
    }>>
}) {
    const sortTypes = type === 'movie' ? sortTypesMovie : sortTypesTV
    const selectedName = sortTypes.find(type => type.type === selectedSort)

    return (
        <div className="filter:w-[224px] h-[48px] relative text-[18px] leading-5 font-medium bg-neutral-800 rounded-2xl w-full">
            <div className="relative px-[18px] py-[14px] rounded-[14px] bg-selectBg flex items-center justify-between">
                <div className="absolute w-full h-full top-0 left-0 cursor-pointer z-10" onClick={() => setIsActive(prev => ({ ...prev, sort: !prev.sort }))}></div>
                <p>{selectedSort ? selectedName?.name : 'Most popular'}</p>
                <IoIosArrowDown className={`${isActive.sort && 'rotate-180'}`} />
            </div>
            {isActive.sort && <div className=" w-full pl-[18px] pr-2 py-[14px] bg-neutral-800 rounded-2xl absolute top-[52px] z-10 left-0 border-[1px] border-neutral-900 overflow-hidden">
                <div className="h-full text-[16px] text-neutral-500">
                    {sortTypes.map(sortType =>
                        <div className="mb-3 last:mb-0" key={sortType.type}>
                            <input type="radio" id={sortType.type} name='model' value={sortType.type} hidden checked={selectedSort === sortType.type} onChange={() => { setSelectedSort(sortType.type); setIsActive(prev => ({ ...prev, sort: false })) }} />
                            <label htmlFor={sortType.type} className={`cursor-pointer ${selectedSort === sortType.type && 'text-neutral-200'}`}>{sortType.name}</label>
                        </div>)}
                </div>
            </div>}
        </div>
    );
}

export default SortInput;