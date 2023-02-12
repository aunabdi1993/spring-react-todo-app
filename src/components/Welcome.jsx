import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Welcome() {

    const { username } = useParams();

    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-3 text-center text-xl font-bold tracking-tight text-gray-900">
                        Welcome {username}!
                    </h2>
                    <h5>
                        Manage your todos <Link to="/todos">here</Link>.
                    </h5>
                </div>
            </div>
        </div>
    )
};

export default Welcome;