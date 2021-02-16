import { connectToDatabase }  from "../../util/mongodb"

export default async (req, res) =>{ 
  
  if (req.method === "POST"){

    const { nameList } = req.body;    

    const { db } = await connectToDatabase();
    
    var query = { nameList: nameList };

    const response = await db.collection("items").find(query).sort({ metacritic: -1 }).toArray();

    res.status(200).json(response)    
  }
}