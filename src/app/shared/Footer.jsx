
const Footer = () => {

const imgs = [
    "/pay/pay16.png",
    "/pay/pay22.png",
    "/pay/pay33.png",
    "/pay/pay34.png",
    "/pay/pay45.png",
    "/pay/pay48.png",
   
]

    return (
       <div className="max-w-[400px] mx-auto bg-[#147b44]">
            <footer className=" p-4 text-gray-400 text-sm ">
                <div className="container mx-auto">
                    {/* Payment Methods */}
                    <div className="mb-6">
                        <h3 className="text-yellow-300 font-bold">Payment Methods</h3>
                        <div className="flex flex-wrap gap-4 mt-2 opacity-40">
                            {/* Payment icons */}

                           {imgs.map((img, idx) => <img className='w-16 h-10' key={idx} src={img} />)}

                        </div>
                    </div>

                    {/* Responsible Gaming */}
                    {/* <div className="mb-6">
                        <h3 className="text-yellow-300 font-bold">Responsible Gaming</h3>
                        <div className="flex gap-4 mt-2 opacity-40">
                            <img src="/pay/pp.png" className='w-16' alt="" />
                           
                        </div>
                    </div> */}


                    {/* Gaming License */}
                    {/* <div className="mt-6 flex flex-col md:flex-row justify-between">
                        <div>
                            <h3 className="text-yellow-300 font-bold">Gaming License</h3>
                            <div className="flex gap-4 mt-2">
                                <img src="/pay/gaming_license.png" className='w-24' alt="" />
                               
                            </div>
                        </div>
                    </div> */}

                    {/* Copyright & Branding */}
                    {/* <div className="mt-6  border-t border-gray-600 pt-4">
                        <h3 className="text-yellow-300 font-bold">Best Quality Platform</h3>
                        <p>© 2025 BGB Copyrights. All Rights Reserved</p>
                    </div> */}

                    {/* Description */}
                    {/* <div className="mt-6 ">
                        <h3 className="text-yellow-300 font-bold text-lg">Fashion Forward – Bangladesh’s Top Choice for Betting & Casino</h3>
                        <p className="mt-2  mx-auto text-left text-white">
                            If you are still unaware of Fashion Forward, you are losing out on one of the greatest online casino and sports betting platforms that Bangladesh has to offer right now. An Asian business that runs several significant worldwide online gaming platforms owns Bengalbet. Because the government of Curacao has granted the organization a license, our games can be played on a secure and dependable website.

                            The core components of theFashion Forward online gaming experience are the privacy and safety of our environment as well as the quality of our products. To ensure an entirely safe and rational online gambling experience, we continually assess our games and procedures and employ the most advanced security measures obtainable. We preserve the secrecy of all your information and we will not sell or share it with outside parties unless it is necessary to comply with our privacy policy.

                           
                        </p>
                    </div> */}
                    
                </div>
            </footer>
        </div>
    )
}

export default Footer
