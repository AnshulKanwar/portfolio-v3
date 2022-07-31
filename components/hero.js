import Image from "next/image";
import Link from "next/link";
import portrait from "../public/portrait.jpg";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] grid place-items-center">
      <div className="max-w-2xl flex justify-between gap-20">
        <div className="p-2 bg-zinc-200 rounded-lg grid place-items-center gap-4">
          <Image
            src={portrait}
            alt=""
            className="rounded-md"
            layout="fixed"
            width={230}
            height={286}
            quality={100}
          />
          <span className="w-full text-2xl italic font-['Sacramento']">Hello Friend...</span>
        </div>
        <div className="mt-14">
          <h1 className="text-4xl font-black italic">
            Hello, <br /> I Am Anshul Kanwar
          </h1>
          <p className="mt-2">
            I am a student pursuing{" "}
            <span className="underline">Computer Science</span> and I love to{" "}
            <span className="underline">code</span>
          </p>
          <div className="mt-8 font-semibold">
            <Link href="#contact">
              <button className="px-5 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white">
                Let&#39;s Talk
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
