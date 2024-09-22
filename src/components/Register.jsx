import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-full max-w-sm bg-[#242424] rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl text-green-500 font-bold mb-4 text-center">
          Sign Up With DreamScape
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-300 text-sm mb-1 font-semibold">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1 font-semibold">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1 font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200 text-sm font-semibold"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-400 mt-4 text-center text-sm">
          Already have an account?{" "}
          <a href="/signin" className="text-green-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
