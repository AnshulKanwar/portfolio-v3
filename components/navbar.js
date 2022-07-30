import Link from "next/link";

const Navbar = () => {
  return (
    <div className="m-8 text-slate-500">
      <div className="flex justify-evenly">
        <span><Link href="#about">About</Link></span>
        <span><Link href="#skills">Skills</Link></span>
        <span><Link href="#projects">Projects</Link></span>
        <span><Link href="#contact">Contact</Link></span>
      </div>
    </div>
  );
};

export default Navbar;
