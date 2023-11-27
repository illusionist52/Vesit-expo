export default async function createProfie(){

  try{
    const res = await fetch(`http://localhost:3002/api/v1/users/createPofile`,{
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json ',
      
    }})
    console.log(res.status)
    console.log(res)
    toast.success("user created successfully")
  }
  catch {

  }
}