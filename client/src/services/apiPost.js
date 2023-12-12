export async function createPosts(data, token){
  try{
    const res =await fetch("http://localhost:3002/api/v1/users/post",{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Authorization": `Bearer ${token}`        
      }
    })
    const data2 = await res.json();
    console.log(data2)
  }catch(err){
    console.log(err)
  }

}