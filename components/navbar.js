import Link from "next/link";

const Navbar = () => {
  return (
    <div className="pt-12 p-8 text-slate-500 font-bold bg-white">
      <div className="flex justify-evenly">
        <Link href="#about">
          <span className="px-5 py-2 text-blue-500 bg-blue-100 rounded-sm skew-y-6 hover:transform-none transition">
            About
          </span>
        </Link>
        <Link href="#skills">
          <span className="px-5 py-2 text-emerald-500 bg-emerald-100 rounded-sm skew-y-6 hover:transform-none transition">
            Skills
          </span>
        </Link>
        <Link href="#projects">
          <span className="px-5 py-2 text-fuchsia-500 bg-fuchsia-100 rounded-sm skew-y-6 hover:transform-none transition">
            Projects
          </span>
        </Link>
        <Link href="#contact">
          <span className="px-5 py-2 text-red-500 bg-red-100 rounded-sm skew-y-6 hover:transform-none transition">
            Contact
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
