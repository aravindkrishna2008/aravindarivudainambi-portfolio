const GradBtn = () => {
  return (
    <div
      style={{
        background: "linear-gradient(130deg, #02F997 0%, #07A3FE 100%)",
      }}
      className="p-1 w-[fit-content] text-white font-medium  font-mono text-[1.25vw] mt-4 cursor-pointer rounded-xl flex flex-col justify-center items-center"
    >
      <div className="bg-[#050513] py-[10px] p-1 px-10 rounded-xl">
        More Info ›
      </div>
    </div>
  );
};

export default GradBtn;
