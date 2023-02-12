import React from 'react';
import { Link } from 'react-router-dom';

function Logout() {
    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-3 text-center text-xl font-bold tracking-tight text-gray-900">
                        You're logged out.
                    </h2>
                    <p>
                        Thanks for using our app. Please come back soon.
                        To login again, click <Link to="/">here</Link>.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Logout;