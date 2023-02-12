import React from 'react';

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

export default Todos;