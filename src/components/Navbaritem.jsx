"use client"
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from "next/navigation";

export default function Navbaritem({title ,param}) {
  const searchParam=useSearchParams();
  const genre=searchParam.get("genre")
  return (
    <div>
    <Link
    className={`m-4 hover:text-blue-700 p-2
    ${
      genre&&
       genre===param &&
      "underline underline-offset-8 decoration-4  decoration-green-700 rounded-lg"
    } `}
     href={`/?genre=${param}`}>   
        {title}
    </Link>
    </div>
  )
}
