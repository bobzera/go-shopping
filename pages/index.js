
import { connectToDatabase } from "../util/mongodb"
import Layout from '../components/Layout'
import { useSession } from 'next-auth/client'
import Link from 'next/link'



export default function Home({data}) {  
  const [ session ] = useSession()

  return (<>  
    
    <Layout>
    
    
    <div className="p-4">
        <h1 className="text-5xl text-center font-semibold text-blue-900">{session && `Bem vindo ${session.user.name} ` ||  `voce ainda nao esta logado` } </h1>
        <Link href="/list/primeira-lista">
        <div className="text-xl  my-8 cursor-pointer bg-blue-600 border-b-4 border-r-4 rounded-lg border-blue-800 hover:border-blue-500">
            <p className=" text-center p-2 text-white font-semibold">Criar Nova Lista</p>    
        </div>
        </Link>
    </div>
    

    </Layout>
      
  </>)
}



export async function getServerSideProps() {

  const { db } = await connectToDatabase();  

 const response = await db.collection("items").find({}).sort({ metacritic: -1 }).toArray();   

  return {
    props: {
     data: JSON.parse(JSON.stringify(response)),
    }
  }
}
