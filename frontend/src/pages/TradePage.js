import React, { useState } from "react";

const TradePage = () => {
  const [trade, setTrade] = useState({
    type: "Buy",
    coin: "BTC",
    amount: "",
    price: "",
  });

  const [marketPrices] = useState({
    BTC: 62000,
    ETH: 2400,
    SOL: 150,
    XRP: 0.6,
    USDT: 1,
  });

  const [history, setHistory] = useState([]);

  const handleTrade = (e) => {
    e.preventDefault();
    const newTrade = {
      ...trade,
      total: (trade.amount * trade.price).toFixed(2),
      time: new Date().toLocaleTimeString(),
    };
    setHistory([newTrade, ...history]);
    setTrade({ ...trade, amount: "", price: "" });
    alert(`${trade.type} Order Submitted!`);
  };

  return (
    <div className="p-6 space-y-8 text-gray-100 bg-gray-900 min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-center text-yellow-400">
        📊 Trade
      </h1>

      {/* Market Prices */}
      <div>
        <h2 className="text-lg font-bold mb-4 text-yellow-400">
          🔥 Market Prices
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Object.entries(marketPrices).map(([coin, price]) => (
            <div
              key={coin}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-4 text-center hover:border-yellow-400 transition"
            >
              <h3 className="text-lg font-bold text-yellow-400">{coin}</h3>
              <p className="text-xl font-semibold mt-2">${price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trade Form */}
      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
        <h2 className="text-lg font-bold mb-4 text-yellow-400">
          🛒 Place an Order
        </h2>
        <form
          onSubmit={handleTrade}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Buy/Sell */}
          <select
            value={trade.type}
            onChange={(e) => setTrade({ ...trade, type: e.target.value })}
            className="border border-gray-600 bg-gray-900 text-gray-100 p-3 rounded-lg focus:border-yellow-400 focus:ring-yellow-400"
          >
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
          </select>

          {/* Coin Selection */}
          <select
            value={trade.coin}
            onChange={(e) => setTrade({ ...trade, coin: e.target.value })}
            className="border border-gray-600 bg-gray-900 text-gray-100 p-3 rounded-lg focus:border-yellow-400 focus:ring-yellow-400"
          >
            {Object.keys(marketPrices).map((coin) => (
              <option key={coin} value={coin}>
                {coin}
              </option>
            ))}
          </select>

          {/* Amount */}
          <input
            type="number"
            placeholder="Amount"
            value={trade.amount}
            onChange={(e) => setTrade({ ...trade, amount: e.target.value })}
            className="border border-gray-600 bg-gray-900 text-gray-100 p-3 rounded-lg focus:border-yellow-400 focus:ring-yellow-400"
            required
          />

          {/* Price */}
          <input
            type="number"
            placeholder="Price per Coin"
            value={trade.price}
            onChange={(e) => setTrade({ ...trade, price: e.target.value })}
            className="border border-gray-600 bg-gray-900 text-gray-100 p-3 rounded-lg focus:border-yellow-400 focus:ring-yellow-400"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className={`${
              trade.type === "Buy"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            } text-white px-6 py-3 rounded-lg md:col-span-2 font-semibold`}
          >
            {trade.type} {trade.coin}
          </button>
        </form>
      </div>

      {/* Trade History */}
      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
        <h2 className="text-lg font-bold mb-4 text-yellow-400">
          📜 Recent Trades
        </h2>
        {history.length === 0 ? (
          <p className="text-gray-400">No trades yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-700 rounded-lg text-sm">
              <thead>
                <tr className="bg-gray-700 text-gray-200">
                  <th className="p-3 text-left">Type</th>
                  <th className="p-3 text-left">Coin</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">Price</th>
                  <th className="p-3 text-left">Total</th>
                  <th className="p-3 text-left">Time</th>
                </tr>
              </thead>
              <tbody>
                {history.map((t, index) => (
                  <tr key={index} className="border-t border-gray-700">
                    <td
                      className={`p-3 font-bold ${
                        t.type === "Buy" ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {t.type}
                    </td>
                    <td className="p-3">{t.coin}</td>
                    <td className="p-3">{t.amount}</td>
                    <td className="p-3">${t.price}</td>
                    <td className="p-3">${t.total}</td>
                    <td className="p-3">{t.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TradePage;
