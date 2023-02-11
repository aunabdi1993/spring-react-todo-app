import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/welcome/:username" element={<Welcome />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    );

    function Login() {

        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [showSuccessMessage, setShowSuccessMessage] = useState(false);
        const [showFailMessage, setShowFailMessage] = useState(false);
        const navigate = useNavigate();

        function handleUsernameChange(event) {
            setUsername(event.target.value);
            // console.log(event.target.value);
        }

        function handlePasswordChange(event) {
            setPassword(event.target.value);
            // console.log(event.target.value);
        };

        function handleSubmit(event) {
            if (username === "admin" && password === "admin") {
                setShowSuccessMessage(true);
                setShowFailMessage(false);
                navigate(`/welcome/${username}`);
            } else {
                setShowFailMessage(true);
                setShowSuccessMessage(false);
            }
        };

        function SuccessMessageComponent() {
            if (showSuccessMessage) {
                return (
                    <div class="success-message bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">Valid credentials!</strong>
                        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                        </span>
                    </div>
                )
            }
        };

        function FailMessageComponent() {
            if (showFailMessage) {
                return (
                    <div class="fail-message bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">Invalid Credentials!</strong>
                        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                        </span>
                    </div>
                )
            }
        };



        return (
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="mt-3 text-center text-xl font-bold tracking-tight text-gray-900">
                            Sign into your account
                        </h2>
                    </div>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="Username" className="sr-only">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Username"
                                onChange={handleUsernameChange}
                                value={username}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Password"
                                onChange={handlePasswordChange}
                                value={password}
                            />
                        </div>
                    </div>
                    <SuccessMessageComponent />
                    <FailMessageComponent />

                    <div>
                        <button
                            type="button"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={handleSubmit}
                        >
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    function Welcome() {

        const {username} = useParams();
        console.log(username);

        return (
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="mt-3 text-center text-xl font-bold tracking-tight text-gray-900">
                            Welcome {username}!
                        </h2>
                    </div>
                </div>
            </div>
        )
    };

    function Error() {
        return (
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="mt-3 text-center text-xl font-bold tracking-tight text-gray-900">
                            Error. Please return to Login page.
                        </h2>
                    </div>
                </div>
            </div>
        )
    };


}
export default App;
