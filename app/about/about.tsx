// pages/about.js
import Link from "next/link";

const About = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-8">
        Hello! I'm Izaz Ahamed, a web developer with a passion for creating
        modern and user-friendly websites. I specialize in Flutter.
      </p>
      <nav className="space-x-4">
        <Link legacyBehavior href="/">
          <a className="text-blue-500">Home</a>
        </Link>
        <Link legacyBehavior href="/contact">
          <a className="text-blue-500">Contact</a>
        </Link>
      </nav>
    </div>
  );
};

export default About;
