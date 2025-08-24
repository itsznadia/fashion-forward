"use client"
import Link from "next/link"

import { useContext } from "react";
import { authContext } from "../lib/AuthProvider";
import { useRouter } from "next/navigation";

const page = () => {

    const value = useContext(authContext)
    const { handleRegister } = value;
    const router = useRouter();

      async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const mobileNumber = form.mobileNumber.value;
        const password = form.password.value;
        const balance = 0.00;
        // console.log(name, gameId, mobileNumber, email, password)

        if (password.length < 6) {
          alert('Password should be at least 6 characters');
          return;
        }
      
        try {
          // Firebase Register
          const userCredential = await handleRegister(email, password);
          const user = userCredential.user;
      
          if (user) {
            alert('Register success');
            router.push('/');
            // // Now post the user data into database
            // const response = await fetch('/api/info', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json'
            //   },
            //   body: JSON.stringify({ email, mobileNumber, password, balance })
            // });
      
            // const data = await response.json();  // <- NEED to await here
            // console.log('Server Response:', data);
      
            // if (response.ok) {
            //   // maybe redirect or show success message
            // } else {
            //  alert('Failed to save user info:', data.message);
            // }
          }
        } catch (error) {
          alert('Error during register:', error.message);
        }
      }

    return (
        <div className='max-w-[400px] mx-auto bg-[#258d48] text-white min-h-screen'>
            <div className="py-12 px-5 ">
                <div className=" z-10">
                    <p className="text-xl lg:text-2xl font-semibold text-yellow-300 text-center">Fashion Forward</p>
                    <h2 className="text-xl font-semibold mb-6 text-center">নিবন্ধন করুন!</h2>
                    <form onSubmit={handleSubmit}>
                        <p className="text-sm  pb-2">আপনার ইমেল লিখুন</p>
                        <input
                            type="text"
                            name="email"
                            required
                            className="w-full p-2 bg-white text-black rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#002632]"
                        />
                        <p className="text-sm  pb-2">মোবাইল নাম্বার</p>
                        <input
                            type="number"
                            name="mobileNumber"
                            required
                            className="w-full p-2 bg-white text-black rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#002632]"
                        />
                        <p className="text-sm  pb-2">পাসওর্য়াড দিন</p>
                        <input
                            type="password"
                            name="password"
                            required
                            className="w-full p-2 bg-white text-black rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#002632]"
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#ffc400] text-black py-3 rounded-md font-bold hover:bg-orange-600 transition"
                        >
                            নিবন্ধন করুন!
                        </button>
                    </form>
                    <p className="text-center mt-4 text-[#63dcec]">
                        ইতিমধ্যে একটি একাউন্ট রয়েছে? <Link href="/login" className="text-white hover:underline">লগইন করুন</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page
