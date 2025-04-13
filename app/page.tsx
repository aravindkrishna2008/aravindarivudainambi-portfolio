import Image from "next/image";
import ProjectsDisplay from "./components/home/projectsdisplay";

const Home = () => {
  return (
    <div className="bg-[#050513] pb-[10%] px-[10%]">
      <div className="flex flex-row">
        <div className="flex flex-col justify-center w-[60%] h-[100vh]">
          <h1 className="text-white text-[5vw]  font-black">Mathemetician</h1>
          <h1 className="text-white text-[5vw] -mt-[1.9vw] font-black grad-text">
            Code Enthusiast
          </h1>
          <h1 className="text-white text-[5vw] -mt-[1.9vw] font-black">
            Innovator
          </h1>
          <p className="text-white text-[1.25vw] font-mono w-[80%]">
            Hi, I&apos;m <span className="font-bold">Aravind</span>, a Lynbrook
            High School student passionate about web development.
          </p>
        </div>
        <div className="flex flex-col justify-center items-end w-[40%] h-[100vh] gap-[1.25vw] ">
          <img src="/Group 69.svg" className="w-[18vw] h-[18vw]" />
          <img src="/Group 26.svg" className="w-[18vw] h-[18vw]" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-[3vw] text-white mb-5">Recent Project</h1>
        {/* @ts-ignore */}
        <ProjectsDisplay />
        <ProjectsDisplay reverse={true} top={true} />
        {/* @ts-ignore */}
        <ProjectsDisplay top={true} />
      </div>
    </div>
  );
};

export default Home;
