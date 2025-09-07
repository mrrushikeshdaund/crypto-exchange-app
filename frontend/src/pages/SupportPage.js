import React, { useState } from "react";

const SupportPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [faqs] = useState([
    {
      question: "How can I reset my password?",
      answer:
        "Go to the login page, click 'Forgot Password', and follow the instructions sent to your email.",
    },
    {
      question: "How do I withdraw funds?",
      answer:
        "Navigate to the Wallet page, select 'Withdraw', enter the amount and your wallet address, then confirm.",
    },
    {
      question: "Is my account secure?",
      answer:
        "Yes, we use industry-standard encryption and 2FA to protect your account.",
    },
  ]);

  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Support form submitted:", form);
    alert("Your support request has been submitted!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="p-6 space-y-10 bg-gray-900 min-h-screen text-white">
      {/* Page Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-400">
        💬 Support Center
      </h1>

      {/* Support Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 shadow-md rounded-2xl p-6 text-center hover:bg-gray-700 transition">
          <h2 className="text-xl font-bold mb-2 text-blue-400">
            📧 Email Support
          </h2>
          <p className="text-gray-300">support@cryptoexchange.com</p>
        </div>
        <div className="bg-gray-800 shadow-md rounded-2xl p-6 text-center hover:bg-gray-700 transition">
          <h2 className="text-xl font-bold mb-2 text-blue-400">💬 Live Chat</h2>
          <p className="text-gray-300">Available 24/7 in the dashboard.</p>
        </div>
        <div className="bg-gray-800 shadow-md rounded-2xl p-6 text-center hover:bg-gray-700 transition">
          <h2 className="text-xl font-bold mb-2 text-blue-400">
            📘 Documentation
          </h2>
          <p className="text-gray-300">Visit our Help Center for guides.</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-800 shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4 text-blue-400">
          ❓ Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 p-4 rounded-lg cursor-pointer bg-gray-900 hover:bg-gray-700 transition"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <h3 className="font-medium flex justify-between items-center">
                <span className="text-white">{faq.question}</span>
                <span className="text-blue-400">
                  {openFaq === index ? "▲" : "▼"}
                </span>
              </h3>
              {openFaq === index && (
                <p className="text-gray-300 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-800 shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4 text-blue-400">📩 Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border border-gray-700 bg-gray-900 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border border-gray-700 bg-gray-900 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="border border-gray-700 bg-gray-900 text-white p-3 rounded-lg md:col-span-2 focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="border border-gray-700 bg-gray-900 text-white p-3 rounded-lg md:col-span-2 focus:ring-2 focus:ring-blue-400"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg md:col-span-2 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupportPage;
