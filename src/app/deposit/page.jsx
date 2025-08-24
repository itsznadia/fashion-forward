"use client";
import { useState } from "react";

export default function DepositPage() {
  const [amount, setAmount] = useState("");
  const [trxId, setTrxId] = useState("");

  const presetAmounts = [100, 200, 500, 1000, 10000];

  const handleAmountClick = (value) => {
    setAmount(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !trxId) {
      alert("Please fill all fields");
      return;
    }
    alert(`Deposit Request Sent!\nAmount: ${amount}\nTRX ID: ${trxId}`);
    setAmount("");
    setTrxId("");
  };

  return (
    <div className="min-h-screen max-w-[400px] mx-auto flex pt-4  justify-center" style={{ backgroundColor: "#258d48" }}>
        
      <div className=" rounded-2xl  p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-yellow-300 mb-6">Deposit</h1>

        {/* Preset Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {presetAmounts.map((amt) => (
            <button
              key={amt}
              onClick={() => handleAmountClick(amt)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              {amt}
            </button>
          ))}
        </div>

          <div className="my-4">
            <p className="text-center text-xl bg-amber-600 p-2 mb-1 rounded-xl text-white">
                01778229692
            </p>
            <p className="text-center text-white">
                এই বিকাশ নাম্বারে শুধুমাত্র সেন্ডমানি গ্রহণ করা হয়। লেনদেন আইডি সঠিকভাবে পূরণ করতে হবে।
            </p>
          </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white mb-2 font-medium">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Amount"
              className="w-full bg-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-white font-medium">TRX ID</label>
            <input
              type="text"
              value={trxId}
              onChange={(e) => setTrxId(e.target.value)}
              placeholder="Enter Transaction ID"
              className="w-full bg-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
