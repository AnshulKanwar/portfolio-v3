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

const Icon = ({ children }) => {
  return (
    <div className="bg-violet-900 hover:bg-[#3B1674] rounded-md p-2 md:p-6 lg:p-8 grid place-items-center">
      {children}
    </div>
  );
};

const Skills = () => {
  return (
    <Container name="Skills" fg="text-violet-900" bg="bg-violet-100">
      <div className="text-violet-100 text-5xl">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 place-items-center">
          <div className="bg-violet-900 hover:bg-[#3B1674] rounded-md">
            <Icon>
              <SiRust />
            </Icon>
          </div>
          <div className="bg-violet-900 hover:bg-[#3B1674] rounded-md">
            <Icon>
              <TbBrandJavascript />
            </Icon>
          </div>
          <div className="bg-violet-900 hover:bg-[#3B1674] rounded-md">
            <Icon>
              <TbBrandReactNative />
            </Icon>
          </div>
          <div className="bg-violet-900 hover:bg-[#3B1674] rounded-md">
            <Icon>
              <TbBrandNextjs />
            </Icon>
          </div>
          <div className="bg-violet-900 hover:bg-[#3B1674] rounded-md">
            <Icon>
              <SiGatsby />
            </Icon>
          </div>
          <div className="bg-violet-900 hover:bg-[#3B1674] rounded-md">
            <Icon>
              <TbBrandPython />
            </Icon>
          </div>
          <div className="bg-violet-900 hover:bg-[#3B1674] rounded-md">
            <Icon>
              <TbBrandTailwind />
            </Icon>
          </div>
          <div className="bg-violet-900 hover:bg-[#3B1674] rounded-md">
            <Icon>
              <TbBrandTabler />
            </Icon>
          </div>
          <div className="bg-violet-900 hover:bg-[#3B1674] rounded-md">
            <Icon>
              <SiOpengl />
            </Icon>
          </div>
          <div className="bg-violet-900 hover:bg-[#3B1674] rounded-md">
            <Icon>
              <SiSwift />
            </Icon>
          </div>
          <div className="bg-violet-900 hover:bg-[#3B1674] rounded-md">
            <Icon>
              <SiCplusplus />
            </Icon>
          </div>
          <div className="bg-violet-900 hover:bg-[#3B1674] rounded-md">
            <Icon>
              <SiDjango />
            </Icon>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
