"use client"
import Link from "next/link"
import { useContext } from "react";
import { authContext } from "../lib/AuthProvider";

const Sticky = () => {

  const value = useContext(authContext)
  const { user } = value;

  return (
    <div className=" fixed bottom-0 left-0 right-0 bg-[#147b44] z-30 max-w-[400px] mx-auto">
      <div className=" textwhite border-t-4 border-t-amber-50">

        {user ?
          <div className="grid grid-cols-2 items-center justify-between">
            <Link href="/deposit" className="bg-yellow-500 p-3 font-bold text-center">Deposit</Link>
            <Link href="/" className="bg-green-500 p-3 font-bold text-center">Withdraw</Link>
          </div>

          :

          <div className="grid grid-cols-2 items-center justify-between">
            <Link href="/login" className="bg-yellow-500 p-3 font-bold text-center">SignIn</Link>
            <Link href="/register" className="bg-green-500 p-3 font-bold text-center">Register</Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Sticky
