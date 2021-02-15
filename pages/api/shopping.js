import { connectToDatabase }  from "../../util/mongodb"

export default async (req, res) =>{ 
  
  if (req.method === "POST"){

    const { nameItem, purchased} = req.body;    
    
    if(!nameItem){
      res.status(400).json({error: "Missing Value nameItem"})
      return
    }
    // teste
    const { db } = await connectToDatabase();
    
    const response = await db.collection("items").insertOne({
     nameItem,
     purchased
    })   

    res.status(200).json(response.ops[0])    
  } 

  if (req.method === "DELETE"){

    const nameItem = req.body;
       
    const { db } = await connectToDatabase();

    const response = await db.collection("items").deleteOne(nameItem, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
    });

    res.status(200).json({delete: "1 document deleted"})    
    
  }

  if (req.method === "PUT"){

    const  { nameItem, purchased } = req.body;
    
    const { db } = await connectToDatabase();

    const response = await db.collection("items").updateOne({"nameItem": nameItem}, {$set:{purchased:purchased}}, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });

    res.status(200).json({delete: "1 document updated"})    
    
  }

}
