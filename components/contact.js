import {
  TbBrandGithub,
  TbMail,
  TbBrandLinkedin,
  TbBrandDiscord,
  TbBrandInstagram,
} from "react-icons/tb";
import Container from "./container";

const Contact = () => {
  return (
    <Container name="Contact" fg="text-red-900" bg="bg-red-100">
      <div className="rounded-md text-5xl text-red-100 grid grid-cols-5 place-items-center gap-16">
        <a
          href="https://github.com/AnshulKanwar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-red-900 hover:bg-[#681619] p-2 md:p-6 lg:p-8 rounded-md grid place-items-center">
            <TbBrandGithub />
          </div>
        </a>
        <a
          href="mailto:anshulkanwar@icloud.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-red-900 hover:bg-[#681619] p-2 md:p-6 lg:p-8 rounded-md grid place-items-center">
            <TbMail />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/anshul-kanwar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-red-900 hover:bg-[#681619] p-2 md:p-6 lg:p-8 rounded-md grid place-items-center">
            <TbBrandLinkedin />
          </div>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-red-900 hover:bg-[#681619] p-2 md:p-6 lg:p-8 rounded-md grid place-items-center">
            <TbBrandDiscord />
          </div>
        </a>
        <a
          href="https://www.instagram.com/_0xanshul/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-red-900 hover:bg-[#681619] p-2 md:p-6 lg:p-8 rounded-md grid place-items-center">
            <TbBrandInstagram />
          </div>
        </a>
      </div>
    </Container>
  );
};

export default Contact;
