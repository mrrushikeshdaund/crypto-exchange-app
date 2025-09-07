import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample Data (replace with API later)
const portfolioData = [
  { date: "2025-09-01", value: 1200 },
  { date: "2025-09-02", value: 1400 },
  { date: "2025-09-03", value: 1350 },
  { date: "2025-09-04", value: 1600 },
];

const recentTransactions = [
  { id: 1, type: "Buy", coin: "BTC", amount: "0.01", price: "$25,000" },
  { id: 2, type: "Sell", coin: "ETH", amount: "0.5", price: "$1,800" },
  { id: 3, type: "Deposit", coin: "USDT", amount: "100", price: "$100" },
];

const DashboardPage = () => {
  return (
    <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Portfolio Overview */}
      <div className="lg:col-span-2 bg-white shadow-md rounded-2xl p-4">
        <h2 className="text-lg md:text-xl font-bold mb-4">Portfolio Value</h2>
        <div className="w-full h-64 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={portfolioData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center">
        <h2 className="text-lg md:text-xl font-bold mb-4">Quick Actions</h2>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full">
          <button className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg">
            Buy Crypto
          </button>
          <button className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg">
            Sell Crypto
          </button>
          <button className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg">
            Deposit
          </button>
          <button className="flex-1 bg-yellow-500 text-white px-4 py-2 rounded-lg">
            Withdraw
          </button>
        </div>
      </div>

      {/* Transactions */}
      <div className="lg:col-span-3 bg-white shadow-md rounded-2xl p-4 overflow-x-auto">
        <h2 className="text-lg md:text-xl font-bold mb-4">
          Recent Transactions
        </h2>
        <table className="w-full min-w-[500px] border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Type</th>
              <th className="p-2 text-left">Coin</th>
              <th className="p-2 text-left">Amount</th>
              <th className="p-2 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((tx) => (
              <tr key={tx.id} className="border-b">
                <td className="p-2">{tx.type}</td>
                <td className="p-2">{tx.coin}</td>
                <td className="p-2">{tx.amount}</td>
                <td className="p-2">{tx.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
