'use client'

import { PropagateLoader } from "react-spinners";

function LoadingPage() {
    return (
        <div className="w-full h-[calc(100vh-76px)] flex items-center justify-center">
            <PropagateLoader color="#e5e5e5" />
        </div>
    );
}

export default LoadingPage;