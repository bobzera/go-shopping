import Form from '../components/form'
import List from '../components/list'
import { useState } from 'react'

export default function App({data}){   
    
    const [ itemList, setItemList ] = useState(data);

    
    async function Purchased(selected,purchasedValue){
        
        console.log("item "+ selected)
        console.log("valor "+purchasedValue)
        try {
          const res = await fetch('./api/shopping', {
            method: 'put',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nameItem:selected,
                purchased:purchasedValue
            }
            ) 
          })
          
          if (res.status === 200) {
            // console.log("Insert done")
           
          } else {
            alert('Sorry, something went wrong.')
          }
        } catch(err) {
          alert(err)
        }
      
}   

    async function delItem(selected){
       
        try {
          const res = await fetch('./api/shopping', {
            method: 'delete',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nameItem:selected,
            }
            ) 
          })
          
          if (res.status === 200) {
            console.log("Insert done")
           
          } else {
            alert('Sorry, something went wrong.')
          }
        } catch(err) {
          alert(err)
        }
      
}   
    
    async function addItem(userInput){

        let copy = [...itemList]; 
        
        console.log(copy)
        copy = [
        ...copy, 
        { nameItem:userInput, purchased:false }       
        ];
    
    setItemList(copy);
       
        try {
          const res = await fetch('./api/shopping', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nameItem:userInput,
                purchased:false}
            ) 
          })
          
          if (res.status === 200) {
            console.log("Insert done")
           
          } else {
            setAlert("error")
            setAlertMsg("Erro! Nenhum item inserido")
            showMsg() 
          }
        } catch(err) {
          alert(err)
        }
      
} 
      
    return(<>
    <div className="p-4 ">       
        <div className="pt-4">
            <h1 className="text-5xl text-center font-semibold text-blue-900">Nossa lista de Compras</h1>
        </div>
        <div className="py-4">
            <Form addItem={addItem}/>
        </div>
        <div className="">
            <List data={itemList} Purchased={Purchased} delItem={delItem}/>
        </div>
    </div>
    </>)
}