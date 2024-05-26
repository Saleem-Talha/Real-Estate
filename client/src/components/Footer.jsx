import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="">
          <p className=" text-xl font-bold">
            {" "}
            Dream Estate{" "}
          </p>
          <div className="max-w-6xl mx-auto px-4 mt-8">
            <p className="text-center text-gray-300">
              "Real estate is about the safest investment in the world."
            </p>
            <p className="text-center text-gray-300 italic">
              &mdash; Franklin D. Roosevelt
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/search" className="hover:text-gray-300">
            Search
          </a>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
          <a href="/signin" className="hover:text-gray-300">
            Sign In
          </a>
        </div>
        <div className="flex flex-col space-y-4 items-end">
          <div>
            <FaPhoneAlt className="inline-block mr-2" />
            <span>123-456-7890</span>
          </div>
          <div>
            <FaEnvelope className="inline-block mr-2" />
            <span>info@dreamestate.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
