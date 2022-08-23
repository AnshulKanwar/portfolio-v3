import Container from "./container";
// import Hobbies from "./hobbies";

const About = () => {
  return (
    <Container name="About" fg="text-pink-500" bg="bg-pink-100">
      <p className="max-w-[70ch] mx-auto text-center">
        My name is Anshul Kanwar and I am a Computer Science student. I have been
        tinkering with computers since 2015 and has since become my passion.
        My interests include Cyber Sercurity, Computer Graphics, Computer Networking and Low Level Programming.
      </p>
    </Container>
  );
};

export default About;
