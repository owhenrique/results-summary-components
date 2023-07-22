import { HiOutlineLightningBolt } from "react-icons/hi";
import { LiaBrainSolid } from "react-icons/lia";
import { BsChatDots } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

function Summary() {
  return (
    <div className="flex flex-col my-4 mx-9 lg:my-3 lg:mx-6 gap-3">
      <h1 className="text-neutral-dark_blue font-bold text-xl">Summary</h1>
      <div className="bg-red-50 flex items-center justify-between h-12 rounded-md px-5">
        <div className="text-primary-red flex items-center gap-3 lg:pr-12">
          <HiOutlineLightningBolt size={18} />
          <h1 className="font-bold">Reaction</h1>
        </div>
        <div className="flex font-medium text-lg gap-2">
          <h1 className="text-neutral-dark_blue font-bold">80</h1>
          <p className="text-gray-300">/ 100</p>
        </div>
      </div>
      <div className="bg-yellow-50 flex items-center justify-between h-12 rounded-md px-5">
        <div className="text-primary-yellow flex items-center gap-3">
          <LiaBrainSolid size={18} />
          <h1 className="font-bold">Memory</h1>
        </div>
        <div className="flex font-medium text-lg gap-2">
          <h1 className="text-neutral-dark_blue font-bold">92</h1>
          <p className="text-gray-300">/ 100</p>
        </div>
      </div>
      <div className="bg-green-50 flex items-center justify-between h-12 rounded-md px-5">
        <div className="text-primary-green flex items-center gap-3">
          <BsChatDots size={18} />
          <h1 className="font-bold">Verbal</h1>
        </div>
        <div className="flex font-medium text-lg gap-2">
          <h1 className="text-neutral-dark_blue font-bold">61</h1>
          <p className="text-gray-300">/ 100</p>
        </div>
      </div>
      <div className="bg-blue-50 flex items-center justify-between h-12 rounded-md px-5">
        <div className="text-primary-blue flex items-center gap-3">
          <AiOutlineEye size={18} />
          <h1 className="font-bold">Visual</h1>
        </div>
        <div className="flex font-medium text-lg gap-2">
          <h1 className="text-neutral-dark_blue font-bold">72</h1>
          <p className="text-gray-300">/ 100</p>
        </div>
      </div>
      <a href="#"><div className="bg-neutral-dark_blue p-2 text-center rounded-3xl">
        <h1 className="text-neutral-white font-bold text-lg">Continue</h1>
      </div></a>
    </div>
  );
}

export default Summary;
