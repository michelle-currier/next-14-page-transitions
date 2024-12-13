import React from "react";

export default function About() {
  return (
    <main className="p-24 flex flex-col gap-4">
      <h1 className="text-5xl font-black">About</h1>
      <p>all of the things</p>
      <button className="w-24 h-12 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
        hello
      </button>
      <img
        src="https://picsum.photos/200"
        aria-label="lorem picsum random img"
        className="transition duration-300 ease-in-out hover:shadow-lg hover:border hover:border-green-700 hover:rounded-md resize-none"
      />
      <input type="email" placeholder="add your email"></input>
    </main>
  );
}
