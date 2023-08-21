import GradBtn from "../gradbtn";

interface ProjectsDisplayProps {
  reverse: boolean;
  top: boolean;
}

const ProjectsDisplay: React.FC<ProjectsDisplayProps> = ({
  reverse = false,
  top = false,
}) => {
  return (
    <div
      className={`flex ${reverse ? "flex-row-reverse" : "flex-row"}       ${
        top ? "mt-20" : "mt-0"
      } mt-5 w-[100 %] justify-between`}
    >
      <div className="w-[42%]">
        <h1 className="text-[2vw] text-white font-bold">
          Oasis Hacks - 3rd Place
        </h1>
        <p className="text-[1.25vw] text-white mt-2 font-mono">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit
          adipiscing bibendum est ultricies. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do ...
        </p>
        <GradBtn />
      </div>
      <div className="w-[50%] h-[100%] flex items-center justify-center">
        <div
          style={{
            background: "linear-gradient(130deg, #02F997 0%, #07A3FE 100%)",
          }}
          className="p-[5px] rounded-xl"
        >
          <img src="/Hack Image.png" alt="placeholder" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsDisplay;
