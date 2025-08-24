"use client"
import Link from "next/link"
import { useContext } from "react";
import { authContext } from "../lib/AuthProvider";
import { useRouter } from "next/navigation";


const page = () => {

    const value = useContext(authContext)
    const { handleLogin } = value;
    const router = useRouter();

      const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userValue = [email, password];

        if(password.length < 6){
            alert('password should be 6 character')
        }

        // Firebase Login 
        handleLogin(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if(user){
                    alert('login success')
                    router.push('/');
                }
                // alert(user)
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                 alert(errorMessage)
            })
    }


    return (
        <div className=' max-w-[400px] mx-auto bg-[#258d48] text-white min-h-screen'>
            <div className=" py-12 px-5 ">
                <div className="z-10 ">
                    <p className="text-xl lg:text-2xl font-semibold text-yellow-300 text-center">Fashion Forward</p>
                    <h2 className="text-xl font-semibold mb-6 text-center">স্বাগতম, লগইন করুন!</h2>
                    <form onSubmit={ handleSubmit}>
                        <p className="text-sm pb-2">আপনার ইমেল লিখুন</p>
                        <input
                            type="email"
                            name="email"
                            required

                            className="w-full text-black bg-white p-2 border-none rounded-md  mb-4 focus:outline-none focus:ring-2 focus:ring-[#002632]"
                        />
                        <p className="text-sm pb-2">পাসওর্য়াড দিন</p>
                        <input
                            type="password"
                            name="password"
                            required

                            className="w-full  text-black bg-white p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#002632]"
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#ffc400] text-black py-3 rounded-md font-bold hover:bg-orange-600 transition"
                        >
                            লগইন করুন
                        </button>
                    </form>
                    <p className="text-center mt-4 
                              ">
                        এখনো কোনো একাউন্ট নেই? <Link href="/register" className="text-white hover:underline">নিবন্ধন করুন</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page
