import Head from 'next/head'
import App from '../components/app'
import { connectToDatabase } from "../util/mongodb";

export default function Home({data}) {
  return (<>
    <Head>
      <title>Go Shopping</title>
    </Head>
    <App data={data}/>
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
