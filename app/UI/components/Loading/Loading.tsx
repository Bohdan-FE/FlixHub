import { PropagateLoader } from "react-spinners"

export const Loading = () => {
    return <div className="w-full h-[250px] flex items-center justify-center">
        <PropagateLoader color="#e5e5e5" />
    </div>
}