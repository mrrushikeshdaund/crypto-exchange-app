import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const MarketPage = () => {
  const coins = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "₹48,50,000",
      change: "+2.4%",
      cap: "₹91.2T",
      volume: "₹4.8T",
      logo: "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400?v=035",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: "₹3,20,000",
      change: "-1.2%",
      cap: "₹38.4T",
      volume: "₹2.1T",
      logo: "https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628?v=035",
    },
    {
      name: "Ripple",
      symbol: "XRP",
      price: "₹85",
      change: "+0.8%",
      cap: "₹4.1T",
      volume: "₹0.5T",
      logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=035",
    },
    {
      name: "Solana",
      symbol: "SOL",
      price: "₹7,500",
      change: "+5.6%",
      cap: "₹3.7T",
      volume: "₹0.9T",
      logo: "https://assets.coingecko.com/coins/images/4128/standard/solana.png?1718769756?v=035",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 md:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <h1 className="text-3xl font-bold text-yellow-400">📊 Crypto Market</h1>
        <input
          type="text"
          placeholder="Search coins..."
          className="mt-4 md:mt-0 px-4 py-2 w-full md:w-72 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border border-gray-800 rounded-lg shadow-md">
          <thead className="bg-gray-900 text-gray-300">
            <tr>
              <th className="px-6 py-3 text-left">Coin</th>
              <th className="px-6 py-3 text-right">Price</th>
              <th className="px-6 py-3 text-right">24h Change</th>
              <th className="px-6 py-3 text-right">Market Cap</th>
              <th className="px-6 py-3 text-right">Volume</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, index) => (
              <tr
                key={index}
                className="border-t border-gray-800 hover:bg-gray-900 transition"
              >
                <td className="px-6 py-4 flex items-center space-x-3">
                  <img src={coin.logo} alt={coin.symbol} className="w-7 h-7" />
                  <span className="font-semibold">{coin.name}</span>
                  <span className="text-sm text-gray-400">({coin.symbol})</span>
                </td>
                <td className="px-6 py-4 text-right">{coin.price}</td>
                <td
                  className={`px-6 py-4 text-right font-semibold flex items-center justify-end space-x-1 ${
                    coin.change.startsWith("+")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {coin.change.startsWith("+") ? (
                    <TrendingUp size={16} />
                  ) : (
                    <TrendingDown size={16} />
                  )}
                  <span>{coin.change}</span>
                </td>
                <td className="px-6 py-4 text-right">{coin.cap}</td>
                <td className="px-6 py-4 text-right">{coin.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {coins.map((coin, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-xl p-5 bg-gray-900 shadow-md hover:shadow-lg hover:border-yellow-400 transition"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center space-x-2">
                <img src={coin.logo} alt={coin.symbol} className="w-8 h-8" />
                <h2 className="font-semibold text-lg">
                  {coin.name}{" "}
                  <span className="text-sm text-gray-400">({coin.symbol})</span>
                </h2>
              </div>
              <span
                className={`font-semibold flex items-center space-x-1 ${
                  coin.change.startsWith("+")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {coin.change.startsWith("+") ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
                <span>{coin.change}</span>
              </span>
            </div>
            <p className="text-gray-400">
              Price: <span className="text-white">{coin.price}</span>
            </p>
            <p className="text-gray-400">
              Market Cap: <span className="text-white">{coin.cap}</span>
            </p>
            <p className="text-gray-400">
              Volume: <span className="text-white">{coin.volume}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketPage;
