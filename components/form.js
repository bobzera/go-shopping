import React, { useState } from 'react';

const form = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-2 flex ">
            <input value={userInput} type="text" onChange={handleChange} className="p-2 w-full rounded" placeholder="Buy bread and milk"/>
            <button className="text-xl cursor-pointer hover:bg-blue-700 rounded mx-2 text-white bg-blue-500 px-4 p-2">New</button>
        </form> 
    );
};

export default form;