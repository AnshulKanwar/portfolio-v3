import About from "../components/about";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="flex flex-col gap-8">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </Layout>
  );
}
