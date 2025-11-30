import React, { useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/saadnaikwade1")
    //     .then((res)=>res.json())
    //     .then((data)=>{console.log(data)
    //         setData(data)
    // })
        
    // },[])

    return (
       <div className="flex w-full max-w-2xl mx-auto items-center gap-6 m-5 bg-gray-700 text-white text-2xl p-6 rounded-2xl shadow-lg">

  
  <img 
    className="rounded-full w-32 h-32 object-cover border-4 border-amber-300 shadow-md" 
    src={data.avatar_url} 
    alt="Git Picture" 
  />

 
  <div className="flex flex-col gap-3 text-amber-200">

    <div className="font-semibold">
      Github Followers: <span className="text-white">{data.followers}</span>
    </div>

    <p className="font-semibold">
      Name: <span className="text-white">{data.name}</span>
    </p>

    <p className="font-semibold">
      Public Repos: <span className="text-white">{data.public_repos}</span>
    </p>

  </div>

</div>

    )
}

export default Github


export const githubinfoLoader=async()=>{
      const res= await fetch("https://api.github.com/users/saadnaikwade1")
      return res.json()

    
}