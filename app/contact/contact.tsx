// pages/contact.js
import Link from "next/link";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="mb-8">
        I'd love to hear from you! You can reach me via email at{" "}
        <a href="mailto:izazahamedpro2017@gmail.com" className="text-blue-500">
          izazahamedpro2017@gmail.com
        </a>
        .
      </p>
      <nav className="space-x-4">
        <Link legacyBehavior href="/">
          <a className="text-blue-500">Home</a>
        </Link>
        <Link legacyBehavior href="/about">
          <a className="text-blue-500">About</a>
        </Link>
      </nav>
    </div>
  );
};

export default Contact;
