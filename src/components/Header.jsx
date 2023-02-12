import React from 'react';
import { useAuth } from '../security/AuthContext';


function Header() {

    const authContext = useAuth();
    const isAuthenticated = authContext.isAuthenticated;

    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {isAuthenticated && <a
                                        href="/"
                                        className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Todo App
                                    </a>}
                                    {!isAuthenticated && <a
                                        href="/"
                                        className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Login
                                    </a>}
                                    {isAuthenticated && <a
                                        href="/todos"
                                        className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Todos
                                    </a>}
                                    {isAuthenticated && <a
                                        href="/logout"
                                        className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium align-right"
                                    >
                                        Logout
                                    </a>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Header;