import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="mb-8">
        Hi, I'm Izaz Ahamed, a passionate web developer. Explore my projects and
        feel free to get in touch.
      </p>
      <nav className="space-x-4">
        <Link legacyBehavior href="/about">
          <a className="text-blue-500">About</a>
        </Link>
        <Link legacyBehavior href="/contact">
          <a className="text-blue-500">Contact</a>
        </Link>
      </nav>
    </div>
  );
}
