import App from '../../components/app'
import { connectToDatabase } from "../../util/mongodb"
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { useSession } from 'next-auth/client'
import Link from 'next/link'


export default function List({data}){
    const [ session ] = useSession()
    const router = useRouter()
    const { list } = router.query


    
    return(<>
        <Layout>
            {session && <> 
            <div className="p-4 ">
                <Link href="/">
                <a className="cursor-pointer text-blue-700 flex">
                    <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                /&larr; voltar</a>
                </Link>
                <h1 className=" p-6 text-5xl text-center font-semibold text-blue-900">{list}</h1>
            </div>
            <App data={data}/>
            </> || 
            <div className="pt-4">
                <h1 className="text-5xl text-center font-semibold text-blue-900">Voce nao esta logado</h1>
            </div>
            }

            
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