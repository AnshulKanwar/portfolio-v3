import Image from "next/image";
import Link from "next/link";
import portrait from "../public/portrait.jpg";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] grid place-items-center">
      <div className="max-w-2xl flex gap-16">
        <div className="p-3 bg-zinc-200 rounded-lg grid place-items-center gap-4">
          <Image
            src={portrait}
            alt=""
            className="rounded-md"
            layout="fixed"
            width={200}
            height={254}
            quality={100}
          />
          <span className="w-full text-lg italic">&#34;This is me.&#34;</span>
        </div>
        <div className="mt-14">
          <h1 className="text-3xl font-black italic">
            Hello, <br /> I Am Anshul Kanwar
          </h1>
          <p className="mt-2">
            I am a student pursuing <span className="underline">Computer Science</span> and I love to{" "}
            <span className="underline">code</span>
          </p>
          <div className="mt-8 font-semibold">
            <button className="px-5 py-2 rounded-md bg-cyan-600 text-white">
              <Link href="#contact">Let&#39;s Talk</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
