import {
  TbBrandReactNative,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandTailwind,
  TbBrandTabler,
} from "react-icons/tb";
import {
  SiOpengl,
  SiRust,
  SiSwift,
  SiCplusplus,
  SiDjango,
  SiGatsby,
} from "react-icons/si";

import Container from "./container";

const Icon = ({ name, children }) => {
  return (
    <div className="px-8 py-4 text-center bg-violet-900 hover:bg-[#3B1674] rounded-md">
      <div className="grid place-items-center my-1 text-5xl">{children}</div>
      <span className="text-xs">{name}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <Container name="Skills" fg="text-violet-900" bg="bg-violet-100">
      <div className="text-violet-100">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 place-items-center">
          <Icon name="Rust">
            <SiRust />
          </Icon>
          <Icon name="Javascript">
            <TbBrandJavascript />
          </Icon>
          <Icon name="React">
            <TbBrandReactNative />
          </Icon>
          <Icon name="Next.js">
            <TbBrandNextjs />
          </Icon>
          <Icon name="Gatsby.js">
            <SiGatsby />
          </Icon>
          <Icon name="Python">
            <TbBrandPython />
          </Icon>
          <Icon name="Tailwind">
            <TbBrandTailwind />
          </Icon>
          <Icon name="Linux">
            <TbBrandTabler />
          </Icon>
          <Icon name="OpenGL">
            <SiOpengl />
          </Icon>
          <Icon name="Swift">
            <SiSwift />
          </Icon>
          <Icon name="C++">
            <SiCplusplus />
          </Icon>
          <Icon name="Django">
            <SiDjango />
          </Icon>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
