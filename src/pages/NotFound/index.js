import React from 'react';

function NotFound(props) {
    return (
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Are you lost?
                    </h2>
                    <p className={'text-center text-gray-500 my-3'}>ReactJS with TailwindCSS Boilerplate by Tangguh</p>
                </div>
            </div>
        </div>
    );
}

export default NotFound;