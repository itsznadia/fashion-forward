"use client"

import { GrGamepad } from "react-icons/gr";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { BiFootball } from "react-icons/bi";
import { MdOutlineCasino } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { authContext } from "../lib/AuthProvider";
import { useRouter } from "next/navigation";



const Tabs = () => {

    const value = useContext(authContext)
    const { user } = value;
    const router = useRouter();

    if (!user) {
        return router.push('/login')
    }


    const [datas, setData] = useState([]);
    const [tabs2, settabs2] = useState([]);
    const [tabs4, settabs4] = useState([]);

    useEffect(() => {
        fetch("/tab1.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    useEffect(() => {
        fetch("/tab2.json")
            .then(res => res.json())
            .then(data => settabs2(data))
    }, []);

    useEffect(() => {
        fetch("/tab4.json")
            .then(res => res.json())
            .then(data => settabs4(data))
    }, []);

    // alert(datas.length);

    return (
        <div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift bg-[#147b44] border-none flex items-center justify-between text-center">

                {/* Tab 1 */}
                <input type="radio" name="my_tabs_3" id="tab1" className="tab  hidden" defaultChecked />
                <div className="tab-content bg-emerald-400 rounded-none p-2">
                    <p>Hot Games</p>
                    <div className="bg-[#147b44] p-2 text-left grid grid-cols-3 gap-3 justify-between items-center">
                        {datas.map(data => <div key={data.id} className="">
                            <Link href={data.link} > <Image src={data.img} width={200} height={300} alt="Game" className="rounded-lg" /></Link>
                        </div>)}
                    </div>

                </div>
                <label htmlFor="tab1" className="tab items-center justify-center gap-1 py-3 bg-amber-300 text-black font-bold">
                    <GrGamepad className="text-black font-bold" />
                    <p className="text-black font-bold">Games</p>
                </label>

                {/* Tab 2 */}
                <input type="radio" name="my_tabs_3" className="tab hidden" id="tab2" />
                <div className="tab-content bg-emerald-400 rounded-none p-2">
                    <p>Slots Games</p>
                    <div className="bg-[#147b44] p-2 text-left grid grid-cols-3 gap-3 justify-between items-center">
                        {tabs2.map(data => <div key={data.id} className="">
                            <Link href={data.link} > <Image src={data.img} width={200} height={300} alt="Game" className="rounded-lg" /></Link>
                        </div>)}
                    </div>

                </div>
                <label htmlFor="tab2" className="tab  items-center justify-center gap-1 py-3 ">
                    <FaCircleDollarToSlot className="text-white" />
                    <p className="text-white">Slot</p>
                </label>

                {/* Tab 3 */}
                <input type="radio" name="my_tabs_3" id="tab3" className="tab  hidden" />
                <div className="tab-content bg-emerald-400 rounded-none p-2">
                    <p>Sports</p>
                    <div className="bg-[#147b44] p-2 text-left grid grid-cols-3 gap-3 justify-between items-center">
                        <Image src="/sports/icon-cmd.png" width={200} height={300} alt="Game" className="rounded-lg" />
                        <Image src="/sports/icon-nst.png" width={200} height={300} alt="Game" className="rounded-lg" />
                        <Image src="/sports/icon-exchange.png" width={200} height={300} alt="Game" className="rounded-lg" />
                    </div>

                </div>
                <label htmlFor="tab3" className="tab items-center justify-center gap-1 py-3 bg-amber-300 text-black font-bold">
                    <BiFootball className="text-black font-bold" />
                    <p className="text-black font-bold">Sports</p>
                </label>

                {/* Tab 4 */}
                <input type="radio" name="my_tabs_3" className="tab hidden" id="tab4" />
                <div className="tab-content bg-emerald-400 rounded-none p-2">
                    <p>Casino</p>
                    <div className="bg-[#147b44] p-2 text-left grid grid-cols-3 gap-3 justify-between items-center">
                        {tabs4.map(data => <div key={data.id} className="">
                            <Link href={data.link} > <Image src={data.img} width={200} height={300} alt="Game" className="rounded-lg" /></Link>
                        </div>)}
                    </div>

                </div>
                <label htmlFor="tab4" className="tab  items-center justify-center gap-1 py-3 ">
                    <MdOutlineCasino className="text-white" />
                    <p className="text-white">Casino</p>
                </label>

            </div>
        </div>
    )
}

export default Tabs
