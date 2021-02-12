function Alert(props){

    if(props.type == "sucess"){
        return(<>
            <div className="text-green-800 bg-green-50 rounded border-2 p-3 border-green-800 flex items-center">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-bold pl-2">{props.message}</p>
            </div>
        </>)       
    }

    if(props.type == "error"){
        return(<>
            <div className="text-red-800 bg-red-50 rounded border-2 p-3 border-red-800 flex items-center">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-bold pl-2">{props.message}</p>
            </div>
        </>)       
    }
    
}

export default Alert

// Usage exemple

// <Alert type="sucess" message="You have successfully logged out."/>
// <Alert type="error" message="You can not do this"/>