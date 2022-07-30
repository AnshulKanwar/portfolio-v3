import About from "../components/about";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Contact from "../components/contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}
