import React from "react";

const Contact = () => (
  <div className="text-primary container mx-auto p-4">
    <h2 className="text-3xl font-bold mb-4 text-primary">Contact Us</h2>
    <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4">
      <div>
        <label className="block font-medium mb-1 text-gray-700">Name</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-primary"
        />
      </div>
      <div>
        <label className="block font-medium mb-1 text-gray-700">Email</label>
        <input
          type="email"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-primary"
        />
      </div>
      <div>
        <label className="block font-medium mb-1 text-gray-700">Message</label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-primary"
          rows="5"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white font-semibold py-3 rounded-lg shadow hover:bg-secondary transition"
      >
        Submit
      </button>
    </form>
  </div>
);

export default Contact;
