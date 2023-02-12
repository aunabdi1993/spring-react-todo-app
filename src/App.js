import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/welcome/:username" element={<Welcome />} />
                    <Route path="/todos" element={<Todos />} />
                    <Route path="/logout" element={<Logout />} />
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

        const { username } = useParams();
        console.log(username);

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

    function Todos() {

        const today = new Date();
        const targetDate = today.getFullYear()+12 + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        const todos = [
            { id: 1, description: 'Learn React', done: false, targetDate: targetDate },
            { id: 2, description: 'Learn Java', done: false, targetDate: targetDate },
            { id: 3, description: 'Learn Python', done: false, targetDate: targetDate },
            { id: 4, description: 'Learn C++', done: false, targetDate: targetDate },
            { id: 5, description: 'Learn C#', done: false, targetDate: targetDate },
        ]

        return (
            <div className="flex min-h-full items-center justify-center py-10 px-4 sm:px-6 lg:px-8 ">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h1 className="mt-3 text-center text-xl font-bold tracking-tight text-gray-900">
                            Things you want to do !
                        </h1>
                        <div>
                            <>
                                <div className="mt-2 flex flex-col">
                                    <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                                <table className="min-w-full divide-y divide-gray-200">
                                                    <thead className="bg-gray-50">
                                                        <tr>
                                                            <td>ID</td>
                                                            <td>Description</td>
                                                            <td>Done</td>
                                                            <td>Target Date</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody
                                                        className="bg-white divide-y divide-gray-200"
                                                    >
                                                        {
                                                            todos.map( todo => (
                                                                <tr key={todo.id}>
                                                                    <td>{todo.id}</td>
                                                                    <td>{todo.description}</td>
                                                                    <td>{todo.done.toString()}</td>
                                                                    <td>{todo.targetDate}</td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        )
    };


    function Header() {
        return (
            <div>
            <nav className="bg-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        <a
                          href="/"
                          className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Todo App
                        </a>
                        <a
                          href="/"
                          className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Login
                        </a>
                        <a
                          href="/todos"
                          className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Todos
                        </a>
                        <a
                          href="/logout"
                          className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium align-right"
                        >
                          Logout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )
    };

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


}
export default App;
