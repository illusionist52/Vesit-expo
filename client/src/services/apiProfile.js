import toast from "react-hot-toast"

export default async function createProfie(data, id, token){

  try{
    const res = await fetch(`http://localhost:3002/api/v1/users/createProfile/${id}`,{
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json ',
      "Authorization": `Bearer ${token}`
      
    }})
    const data2 = await res.json()
    console.log(data2)
    toast.success("profile created successfully")
  
  }
  catch {
    throw new Error("something went wrong")
  }
}