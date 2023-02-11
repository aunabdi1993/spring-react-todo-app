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
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
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
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        <a
                          href="#"
                          className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Dashboard
                        </a>
      
                        <a
                          href="#"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Team
                        </a>
      
                        <a
                          href="#"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Projects
                        </a>
      
                        <a
                          href="#"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Calendar
                        </a>
      
                        <a
                          href="#"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Reports
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    <button
                      type="button"
                      className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      aria-controls="mobile-menu"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Open main menu</span>
      
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
      
                      <svg
                        className="hidden h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
      
              <div className="md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <a
                    href="#"
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Dashboard
                  </a>
      
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Team
                  </a>
      
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Projects
                  </a>
      
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Calendar
                  </a>
      
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Reports
                  </a>
                </div>
              </div>
            </nav>
      
            <header className="bg-white shadow">
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              </div>
            </header>
            <main>
              <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {/* <!-- Replace with your content --> */}
                <div className="px-4 py-6 sm:px-0">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                </div>
                {/* <!-- /End replace --> */}
              </div>
            </main>
          </div>
        )
    };


}
export default App;
