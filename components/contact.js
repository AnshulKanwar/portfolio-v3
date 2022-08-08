import {
  TbBrandGithub,
  TbMail,
  TbBrandLinkedin,
  TbBrandDiscord,
  TbBrandInstagram,
} from "react-icons/tb";
import Container from "./container";

const Icon = ({ children }) => {
  return (
    <div className="p-2 md:p-6 lg:p-8 grid place-items-center bg-blue-900 hover:bg-[#172B65] rounded-md">
      {children}
    </div>
  );
};

const Contact = () => {
  return (
    <Container name="Contact" fg="text-blue-900" bg="bg-blue-100">
      <div className="rounded-md text-5xl text-blue-100 grid grid-cols-3 sm:grid-cols-5 place-items-center gap-16">
        <a
          href="https://github.com/AnshulKanwar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon>
            <TbBrandGithub />
          </Icon>
        </a>
        <a
          href="mailto:anshulkanwar@icloud.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon>
            <TbMail />
          </Icon>
        </a>
        <a
          href="https://www.linkedin.com/in/anshul-kanwar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-blue-900 hover:bg-[#172B65] rounded-md">
            <Icon>
              <TbBrandLinkedin />
            </Icon>
          </div>
        </a>
        <a className="group" href="#" target="_blank" rel="noopener noreferrer">
          <Icon>
            <TbBrandDiscord />
            <div className="hidden group-hover:block text-xs">KernalPanic#0739</div>
          </Icon>
        </a>
        <a
          href="https://www.instagram.com/_0xanshul/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon>
            <TbBrandInstagram />
          </Icon>
        </a>
      </div>
    </Container>
  );
};

export default Contact;
