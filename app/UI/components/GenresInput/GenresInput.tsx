import { genres as movieGenres, tvGenres } from "@/app/lib/genres";
import { ChangeEvent } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCheckBox } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";


function GenresInput({ setSelectedGenres, selectedGenres, isActive, setIsActive, type }: {
    setSelectedGenres: React.Dispatch<React.SetStateAction<[] | Genre[]>>, type: string, selectedGenres: [] | Genre[], isActive: {
        sort: boolean;
        genres: boolean;
        year: boolean;
    }, setIsActive: React.Dispatch<React.SetStateAction<{
        sort: boolean;
        genres: boolean;
        year: boolean;
    }>>
}) {
    const genres = type === 'movie' ? movieGenres : tvGenres
    const selectedName = (): string => {
        return selectedGenres.map(item => item.name).join(', ')
    }
    const isSelected = (id: string) => {
        if (selectedGenres.find(genre => genre.id === id)) return true
        return false
    }

    const selectHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const genre = { id: e.target.id, name: e.target.name }
        if (e.target.id === 'all') { setSelectedGenres([]); return }
        if (!e.target.checked) setSelectedGenres(prev => prev.filter(prevGenre => prevGenre.id !== genre.id))
        if (e.target.checked) setSelectedGenres(prev => [...prev, genre])
    }

    return (
        <div className="filter:w-[224px] h-[48px] relative text-[18px] leading-5 font-medium bg-neutral-800 rounded-2xl w-full">
            <div className="px-[18px] py-[14px] rounded-[14px] bg-selectBg flex items-center justify-between cursor-pointer overflow-hidden h-full" onClick={() => setIsActive(prev => ({ ...prev, genres: !prev.genres }))}>
                <p className="truncate">{selectedGenres.length !== 0 ? selectedName() : 'All genres'}</p>
                <IoIosArrowDown className={'shrink-0' + ' ' + `${isActive.genres && 'rotate-180'}`} />
            </div>
            {isActive.genres && <div className="h-[400px] w-full pl-[18px] pr-2 py-[14px] bg-neutral-800 rounded-2xl absolute top-[52px] z-10 left-0 border-[1px] border-neutral-900 overflow-hidden">
                <div className="h-full text-[16px] text-neutral-500 overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-500 scrollbar-thumb-rounded-full">
                    <div className="mb-3 last:mb-0 flex gap-1 items-center" key={0}>
                        <label htmlFor="all" className="cursor-pointer">
                            {selectedGenres.length === 0 ? <MdOutlineCheckBox className="fill-neutral-200" /> : <MdCheckBoxOutlineBlank />}
                            <input type="checkbox" hidden id='all' name='all' value='' checked={selectedGenres.length === 0} onChange={(e) => { selectHandler(e); setIsActive(prev => ({ ...prev, genres: false })) }} />
                        </label>
                        <label htmlFor='all' className={`cursor-pointer ${selectedGenres.length === 0 && 'text-neutral-200'}`}>All genres</label>
                    </div>
                    {genres.map(genre =>
                        <div className="mb-3 last:mb-0 flex gap-1 items-center" key={genre.id}>
                            <label htmlFor={genre.id} className="cursor-pointer">
                                {isSelected(genre.id) ? <MdOutlineCheckBox className="fill-neutral-200 " /> : <MdCheckBoxOutlineBlank />}
                                <input type="checkbox" hidden id={genre.id} name={genre.name} value={genre.id} checked={isSelected(genre.id)} onChange={selectHandler} />
                            </label>
                            <label htmlFor={genre.id} className={`cursor-pointer ${isSelected(genre.id) && 'text-neutral-200'}`}>{genre.name}</label>
                        </div>)}
                </div>
            </div>}
        </div>
    );
}

export default GenresInput;