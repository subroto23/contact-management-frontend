import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Error() {
  return (
    <div className="bg-gradient-to-r from-purple-300 to-blue-200 min-h-screen flex items-center justify-center">
      <div className="w-9/12 m-auto py-16 flex items-center justify-center">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
          <div className="border-t border-gray-200 text-center pt-8 px-3">
            <h1 className="text-9xl font-bold text-purple-400">404</h1>
            <h1 className="text-3xl font-medium py-8">Oops! Page not found</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
