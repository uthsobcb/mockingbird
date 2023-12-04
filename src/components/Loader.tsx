import React from 'react';

function Loader() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="text-4xl animate-bounce">🚀</div>
            <div className="ml-5">
                <p className="text-lg font-bold">Launching...</p>
                <p className="text-gray-500">Blast off in progress</p>
            </div>
        </div>
    );
}
export default Loader;