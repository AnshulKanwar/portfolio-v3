import Link from "next/link";

const Navbar = () => {
  return (
    <div className="pt-12 p-8 text-slate-500 backdrop-blur-lg bg-white/75 w-full fixed top-0 left-0 z-50">
      <div className="flex justify-evenly">
        <span className="hover:underline">
          <Link href="#about">About</Link>
        </span>
        <span className="hover:underline">
          <Link href="#skills">Skills</Link>
        </span>
        <span className="hover:underline">
          <Link href="#projects">Projects</Link>
        </span>
        <span className="hover:underline">
          <Link href="#contact">Contact</Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
