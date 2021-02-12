import { useState } from 'react'

export default function List({data, Purchased, delItem }){ 

    //const [ itemList, setItemList ] = useState(data);
    
    const handleClick = (e) => {
        e.preventDefault()
       const  ver  =  data.filter(item => item.nameItem == e.currentTarget.id); 
       
       const v = ver.map((a) =>(a.purchased))
               
       const selected = e.currentTarget.id 
       let purchasedValue = false

       if(v[0]){        
        purchasedValue = false       
       }else{
        purchasedValue = true        
        }    
       
      Purchased(selected, purchasedValue)
   
    }
    const handleDelete = (e) => {
        e.preventDefault()
        delItem(e.currentTarget.id)
        alert("O item "+e.currentTarget.id+" foi deletado")  
    }
    

    return (
        <div>           
             
        {data.map((item) =>( 
        <div  key={`${item.nameItem}`} id={item.nameItem} onClick={handleClick}>
            <div className="bg-gray-100 p-2 flex ">
                {item.purchased  && <svg className="w-8 h-8 bg-green-100 border-2 rounded border-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>}
                {!item.purchased  && <div className="w-8 h-8   bg-white border-2 rounded border-black"></div>}
                <h1 className={item.purchased ? "line-through pl-2 text-xl" : "pl-2 text-xl"} >{item.nameItem}</h1>
                <div id={item.nameItem} className="cursor-pointer absolute right-6" onClick={handleDelete}>
                    <svg className="w-6 h-6 text-red-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </div>        
            </div>    
        </div>)
        )}                   
                     
        </div>
    );
};

