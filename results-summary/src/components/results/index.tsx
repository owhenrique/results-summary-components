function Results() {
  return (
    <div className="bg-gradient-to-b from-gradiants-light_blue to-gradiants-royal_blue flex flex-col items-center h-[45vh] rounded-b-[10%] gap-2">
      <h1 className="text-neutral-lavender my-4 font-medium text-lg">Your result</h1>
      <div className="bg-gradient-to-b from-gradiants-violet_blue to-gradiants-persian_blue flex flex-col w-32 h-32 items-center rounded-full">
        <h1 className="text-neutral-white text-6xl font-bold mt-6">76</h1>
        <p className="text-neutral-lavender font-medium">of 100</p>
      </div>
      <p className="text-neutral-white text-2xl font-bold">Great</p>
      <p className="text-neutral-lavender font-medium">You scored higher than 65% of the <br /> people who have taken these tests.</p>
    </div>
  );
}

export default Results;
