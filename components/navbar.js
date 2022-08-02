import Link from "next/link";

const Navbar = () => {
  return (
    <div className="hidden sm:block p-4 sm:pt-12 text-slate-500 font-bold bg-white">
      <div className="flex flex-col sm:flex-row justify-evenly gap-2">
        <Link href="#about">
          <span className="px-5 py-2 text-pink-500 bg-pink-100 rounded-sm sm:skew-y-6 hover:transform-none hover:cursor-pointer transition">
            About
          </span>
        </Link>
        <Link href="#skills">
          <span className="px-5 py-2 text-violet-500 bg-violet-100 rounded-sm sm:skew-y-6 hover:transform-none hover:cursor-pointer transition">
            Skills
          </span>
        </Link>
        <Link href="#projects">
          <span className="px-5 py-2 text-orange-500 bg-orange-100 rounded-sm sm:skew-y-6 hover:transform-none hover:cursor-pointer transition">
            Projects
          </span>
        </Link>
        <Link href="#contact">
          <span className="px-5 py-2 text-blue-500 bg-blue-100 rounded-sm sm:skew-y-6 hover:transform-none hover:cursor-pointer transition">
            Contact
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
