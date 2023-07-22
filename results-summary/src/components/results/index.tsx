function Results() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-gradiants-light_blue to-gradiants-royal_blue items-center h-[40vh] lg:h-[350px] lg:w-[35vh] py-3 px-2 rounded-b-[2rem] lg:rounded-[2rem] gap-2">
      <h1 className="text-neutral-lavender font-medium text-lg">Your result</h1>
      <div className="bg-gradient-to-b from-gradiants-violet_blue to-gradiants-persian_blue flex flex-col w-32 h-32 items-center rounded-full">
        <h1 className="text-neutral-white text-6xl font-bold mt-4">76</h1>
        <p className="text-neutral-lavender font-medium">of 100</p>
      </div>
      <p className="text-neutral-white text-xl font-bold">Great</p>
      <p className="text-neutral-lavender text-base font-medium mb-1 mx-3">You scored higher than 65% of the<br/> people who have taken these tests.</p>
    </div>
  );
}

export default Results;
