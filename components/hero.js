import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import portrait from "../public/portrait.jpg";

const accents = [
  { bg: "bg-rose-100", fg: "text-rose-500" },
  { bg: "bg-violet-100", fg: "text-violet-500" },
  { bg: "bg-orange-100", fg: "text-orange-500" },
  { bg: "bg-blue-100", fg: "text-blue-500" },
];

const Hero = () => {
  const [accent, setAccent] = useState("bg-blue-100 text-blue-500");

  useEffect(() => {
    const accent = accents[Math.floor(Math.random() * accents.length)];
    const accentText = `${accent.bg} ${accent.fg}`;
    setAccent(accentText);
  }, []);

  return (
    <div className="min-h-screen sm:min-h-[calc(100vh-7rem)] grid place-items-center">
      <div className="max-w-3xl flex flex-col-reverse sm:flex-row justify-around items-center gap-20">
        <div className="p-2 bg-zinc-200 rounded-lg grid place-items-center grid-cols-2 sm:grid-cols-1 gap-4">
          <Image
            src={portrait}
            alt=""
            className="rounded-md"
            layout="intrinsic"
            width={230}
            height={286}
            quality={100}
          />
          <span className="w-full text-2xl italic font-['Sacramento']">
            Hello Friend...
          </span>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-snug">
            Hello, <br /> I Am{" "}
            <span className={`px-2 mx-1 italic rounded-md ${accent}`}>
              Anshul Kanwar
            </span>
          </h1>
          <p className="mt-2">
            I am a student pursuing{" "}
            <span className="underline">Computer Science</span> and I love to{" "}
            <span className="underline">code</span>
          </p>
          <div className="mt-8 font-semibold flex gap-4">
            <Link href="#contact">
              <button className="px-5 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white">
                Let&#39;s Talk
              </button>
            </Link>
            {/* <Link href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
              <button className="px-5 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white">
                Resume
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
