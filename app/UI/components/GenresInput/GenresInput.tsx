import { genres } from "@/app/lib/genres";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


function GenresInput({ setSelectedGenre, selectedGenre }: { setSelectedGenre: React.Dispatch<React.SetStateAction<string>>, selectedGenre: string }) {
    const [isActive, setIsActive] = useState(false)
    const selectedName = genres.find(type => type.id === selectedGenre)
    return (
        <div className="w-[224px] h-[48px] relative text-[18px] leading-5 font-medium bg-neutral-800 rounded-2xl">
            <div className="px-[18px] py-[14px] rounded-[14px] bg-selectBg flex items-center justify-between cursor-pointer" onClick={() => setIsActive(!isActive)}>
                <p>{selectedGenre ? selectedName?.name : 'All genres'}</p>
                <IoIosArrowDown className={`${isActive && 'rotate-180'}`} />
            </div>
            {isActive && <div className=" w-full pl-[18px] pr-2 py-[14px] bg-neutral-800 rounded-2xl absolute top-[52px] z-10 left-0 border-[1px] border-neutral-900 overflow-hidden">
                <div className="h-full text-[16px] text-neutral-500">
                    <div className="mb-3 last:mb-0" key={0}>
                        <input type="radio" id='all' name='model' value='' hidden checked={selectedGenre === ''} onChange={() => { setSelectedGenre(''); setIsActive(!isActive) }} />
                        <label htmlFor='all' className={`cursor-pointer ${selectedGenre === '' && 'text-neutral-200'}`}>All genres</label>
                    </div>
                    {genres.map(genre =>
                        <div className="mb-3 last:mb-0" key={genre.id}>
                            <input type="checkbox" id={genre.id} name='model' value={genre.id} hidden checked={selectedGenre === genre.id} onChange={() => { setSelectedGenre(genre.id); setIsActive(!isActive) }} />
                            <label htmlFor={genre.id} className={`cursor-pointer ${selectedGenre === genre.id && 'text-neutral-200'}`}>{genre.name}</label>
                        </div>)}
                </div>
            </div>}
        </div>
    );
}

export default GenresInput;