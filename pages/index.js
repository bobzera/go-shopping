
import Layout from '../components/Layout'
import { useSession } from 'next-auth/client'
import Link from 'next/link'
import { useState } from 'react'



export default function Home() {

  const [ session ] = useSession()

  const newDate = []
  const [newList, setList] = useState(newDate)
 

  async function getItem(){

    const userEmail = await session.user.email  

      try {
        const res = await fetch('/api/get-user', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              
            creatBy: userEmail
              
            }
          ) 
        })
        
        const data = await res.json()

        if (res.status === 200) {       
                 
         const agora = JSON.parse(JSON.stringify(data))
         

          const novaLista = []

          const novaListas =  agora.map((list)=>(
            novaLista.push(list.nameList)
          ))
          const semRepeticao = [...new Set(novaLista)];
          setList(semRepeticao)

        } else {
          console.log("erro no item insert") 
        }
      } catch(err) {
        // alert(err)
      }
    
}  

const [ userInput, setUserInput ] = useState('');

const handleChange = (e) => {
  setUserInput(e.currentTarget.value)      
}
  return (<>  
    
    <Layout>
    
    
    <div className="p-4">
        <h1 className="text-3xl text-center font-semibold text-blue-900">{session && `Bem vindo ${session.user.name} ` ||  `voce ainda nao esta logado` } </h1>
         
        {session && <>
          <div className="py-8 text-center text-blue-900 cursor-pointer" onClick={getItem}><p>ver lista</p></div>
       
          
       <ul>
           

         {newList.map((list)=>(
           <Link href={`/list/${list}`}>
           <li className="p-2 bg-gray-100 my-4 flex">
             <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            <a className="p-2">{list}</a>
            </li>
           </Link>
         ))}
       </ul>
       <input className="border-blue-700 border-2 mt-4 p-2 w-full rounded-md" value={userInput} type="text" onChange={handleChange}  placeholder="Nome da lista"/>
       <Link href={`/list/${userInput}`}>
          <div className="text-xl my-2 cursor-pointer bg-blue-600 border-b-4 border-r-4 rounded-lg border-blue-800 hover:border-blue-500">
              <p className=" text-center p-2 text-white font-semibold">Criar Nova Lista</p>    
          </div>
          </Link>
          
          </>}
    </div>
    

    </Layout>
      
  </>)
}




// export async function getServerSideProps() {

//   const { db } = await connectToDatabase();  

//   var query = { creatBy: "weslleyzera2020@gmail.com" };

//  const response = await db.collection("items").find(query).sort({ metacritic: -1 }).toArray();   

//   return {
//     props: {
//      data: JSON.parse(JSON.stringify(response)),
//     }
//   }
// }
