"use client"
import { redirect } from "next/navigation";

export default function Home() {

  const local = localStorage.setItem('token', '123');

  if(!local) {
    redirect('/login');
  }else{
    const local = localStorage.setItem('token', '123');
    
  }

  return (
    <div>
      <h1 className="w-52 m-auto bg-red-500 text-center font-bold text-3xl rounded-lg ">HOME</h1>
    </div>
  )
}
