import React, { useState } from "react";

const WalletPage = () => {
  const [balances] = useState({
    BTC: 0.05,
    ETH: 1.2,
    USDT: 500,
    SOL: 10,
    XRP: 300,
  });

  const [activeTab, setActiveTab] = useState("Transfer");

  const [transfer, setTransfer] = useState({
    toUser: "",
    coin: "BTC",
    amount: "",
  });
  const [withdraw, setWithdraw] = useState({
    address: "",
    coin: "BTC",
    amount: "",
  });
  const [trade, setTrade] = useState({ type: "Buy", coin: "BTC", amount: "" });

  // Dummy Transaction History
  const [transactions] = useState([
    {
      id: 1,
      type: "Transfer",
      coin: "BTC",
      amount: "0.01",
      to: "alice",
      date: "2025-09-01",
    },
    {
      id: 2,
      type: "Withdraw",
      coin: "ETH",
      amount: "0.2",
      to: "0x1234...",
      date: "2025-09-02",
    },
    {
      id: 3,
      type: "Trade",
      coin: "USDT",
      amount: "100",
      to: "Market Buy BTC",
      date: "2025-09-03",
    },
    {
      id: 4,
      type: "Transfer",
      coin: "SOL",
      amount: "2",
      to: "bob",
      date: "2025-09-04",
    },
    {
      id: 5,
      type: "Withdraw",
      coin: "BTC",
      amount: "0.005",
      to: "0x5678...",
      date: "2025-09-05",
    },
  ]);

  const handleSubmit = (type) => {
    console.log(`${type} submitted`, { transfer, withdraw, trade });
    alert(`${type} request submitted!`);
  };

  // Filter transactions
  const selectedCoin =
    activeTab === "Transfer"
      ? transfer.coin
      : activeTab === "Withdraw"
      ? withdraw.coin
      : trade.coin;

  const filteredTransactions = transactions.filter(
    (tx) => tx.coin === selectedCoin
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6 space-y-8">
      {/* Balances Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">
          💰 Wallet Balances
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Object.entries(balances).map(([coin, value]) => (
            <div
              key={coin}
              className="bg-gray-800 shadow-md rounded-2xl p-4 text-center hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-yellow-400">{coin}</h3>
              <p className="text-xl font-semibold mt-2 text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-gray-700">
        {["Transfer", "Withdraw", "Trade"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-t-lg font-medium transition ${
              activeTab === tab
                ? "bg-yellow-400 text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-gray-800 shadow-md rounded-b-2xl p-6 space-y-8">
        {/* Forms */}
        {activeTab === "Transfer" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit("Transfer");
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <input
              type="text"
              placeholder="Recipient Username"
              value={transfer.toUser}
              onChange={(e) =>
                setTransfer({ ...transfer, toUser: e.target.value })
              }
              className="border border-gray-600 bg-gray-900 text-gray-200 p-2 rounded-lg"
              required
            />
            <select
              value={transfer.coin}
              onChange={(e) =>
                setTransfer({ ...transfer, coin: e.target.value })
              }
              className="border border-gray-600 bg-gray-900 text-gray-200 p-2 rounded-lg"
            >
              {Object.keys(balances).map((coin) => (
                <option key={coin} value={coin}>
                  {coin}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Amount"
              value={transfer.amount}
              onChange={(e) =>
                setTransfer({ ...transfer, amount: e.target.value })
              }
              className="border border-gray-600 bg-gray-900 text-gray-200 p-2 rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded-lg md:col-span-3"
            >
              Transfer
            </button>
          </form>
        )}

        {activeTab === "Withdraw" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit("Withdraw");
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <input
              type="text"
              placeholder="Wallet Address"
              value={withdraw.address}
              onChange={(e) =>
                setWithdraw({ ...withdraw, address: e.target.value })
              }
              className="border border-gray-600 bg-gray-900 text-gray-200 p-2 rounded-lg"
              required
            />
            <select
              value={withdraw.coin}
              onChange={(e) =>
                setWithdraw({ ...withdraw, coin: e.target.value })
              }
              className="border border-gray-600 bg-gray-900 text-gray-200 p-2 rounded-lg"
            >
              {Object.keys(balances).map((coin) => (
                <option key={coin} value={coin}>
                  {coin}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Amount"
              value={withdraw.amount}
              onChange={(e) =>
                setWithdraw({ ...withdraw, amount: e.target.value })
              }
              className="border border-gray-600 bg-gray-900 text-gray-200 p-2 rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded-lg md:col-span-3"
            >
              Withdraw
            </button>
          </form>
        )}

        {activeTab === "Trade" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit("Trade");
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <select
              value={trade.type}
              onChange={(e) => setTrade({ ...trade, type: e.target.value })}
              className="border border-gray-600 bg-gray-900 text-gray-200 p-2 rounded-lg"
            >
              <option value="Buy">Buy</option>
              <option value="Sell">Sell</option>
            </select>
            <select
              value={trade.coin}
              onChange={(e) => setTrade({ ...trade, coin: e.target.value })}
              className="border border-gray-600 bg-gray-900 text-gray-200 p-2 rounded-lg"
            >
              {Object.keys(balances).map((coin) => (
                <option key={coin} value={coin}>
                  {coin}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Amount"
              value={trade.amount}
              onChange={(e) => setTrade({ ...trade, amount: e.target.value })}
              className="border border-gray-600 bg-gray-900 text-gray-200 p-2 rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded-lg md:col-span-3"
            >
              {trade.type}
            </button>
          </form>
        )}

        {/* Transaction History */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-yellow-400">
            📜 {selectedCoin} Transaction History
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] border border-gray-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-700 text-gray-200">
                  <th className="p-3 text-left">Type</th>
                  <th className="p-3 text-left">Coin</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">To</th>
                  <th className="p-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((tx) => (
                    <tr
                      key={tx.id}
                      className="border-t border-gray-700 hover:bg-gray-700 transition"
                    >
                      <td className="p-3 text-yellow-400">{tx.type}</td>
                      <td className="p-3">{tx.coin}</td>
                      <td className="p-3">{tx.amount}</td>
                      <td className="p-3">{tx.to}</td>
                      <td className="p-3">{tx.date}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      className="p-3 text-gray-500 italic text-center"
                      colSpan={5}
                    >
                      No transactions for {selectedCoin}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
