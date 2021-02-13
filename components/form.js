import React, { useState } from 'react';
import Alert from '../components/alert'

const form = ({ addItem }) => {

    const [ userInput, setUserInput ] = useState('');

    const [msg, setMsg] = useState(false);
    const [typeAlert, setAlert] = useState('');
    const [msgAlert, setAlertMsg] = useState('');
    
    function showMsg(valor){
        setMsg(true)
        setTimeout(() => setMsg(false), 3000);     
    }

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)      
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();        
        addItem(userInput);
        setUserInput("");        

        setAlert("sucess")
        setAlertMsg(userInput+" foi adicionado") 
        showMsg()
        
        if(userInput == ""){
            setAlert("error")
            setAlertMsg("Nenhum item inserido") 
            showMsg()
        }
    }

    return (<>
        <form onSubmit={handleSubmit} className="bg-gray-100 p-2  flex ">
            <input value={userInput} type="text" onChange={handleChange} className="p-2 w-full rounded" placeholder="Buy bread and milk"/>
            <button className="text-xl cursor-pointer hover:bg-blue-700 rounded  text-white ml-2 bg-blue-500 px-4 p-2">Add</button>            
        </form>
        {msg && <div className="py-2"> <Alert type={typeAlert} message={msgAlert}/> </div>} 
    </>);
};

export default form;