import { PropagateLoader } from "react-spinners";

function LoadingPage() {
    return (
        <div className="w-[100vw] h-[100vh] flex items-center justify-center">
            <PropagateLoader color="#e5e5e5" />
        </div>
    );
}

export default LoadingPage;