import toast from "react-hot-toast";

export default async function createUser(data){
  console.log(JSON.stringify(data))
  try{
    const res = await fetch(`http://localhost:3002/api/v1/users/signup`,{
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json ',
      
    }})
    console.log(res.status)
    console.log(res)
    console.log("bhakchodi mat kar")
    toast.success("user created successfully")
 
  const dbdata = res.json()
  console.log(dbdata)
  return dbdata;
} catch{
  throw new Error("something went wrong")
}
}