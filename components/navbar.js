import Link from "next/link";

const Navbar = () => {
  return (
    <div className="pt-12 p-8 text-slate-500 font-bold bg-white">
      <div className="flex justify-evenly">
        <span className="px-5 py-2 text-blue-500 bg-blue-100 rounded-sm skew-y-3 hover:skew-y-[-3]">
          <Link href="#about">About</Link>
        </span>
        <span className="px-5 py-2 text-emerald-500 bg-emerald-100 rounded-sm skew-y-3 hover:skew-y-[-3]">
          <Link href="#skills">Skills</Link>
        </span>
        <span className="px-5 py-2 text-fuchsia-500 bg-fuchsia-100 rounded-sm skew-y-3 hover:skew-y-[-3]">
          <Link href="#projects">Projects</Link>
        </span>
        <span className="px-5 py-2 text-red-500 bg-red-100 rounded-sm skew-y-3 hover:skew-y-[-3]">
          <Link href="#contact">Contact</Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
