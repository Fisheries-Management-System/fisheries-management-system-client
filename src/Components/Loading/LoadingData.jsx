import React from "react";

const LoadingData = () => {
    return (
        <>
            <div className="w-full flex items-center flex-col">
                <div className="flex bg-white shadow-md p-4 rounded-md">
                    <div
                        data-placeholder
                        className="mr-2 h-20 w-20 rounded-full overflow-hidden relative bg-gray-200"
                    ></div>
                    <div className="flex flex-col justify-between">
                        <div
                            data-placeholder
                            className="mb-2 h-5 w-40 overflow-hidden relative bg-gray-200"
                        ></div>
                        <div
                            data-placeholder
                            className="h-10 w-40 overflow-hidden relative bg-gray-200"
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoadingData;
