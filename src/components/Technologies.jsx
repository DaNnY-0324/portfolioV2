import { RiReactjsLine } from "react-icons/ri";
import { DiPython, DiHtml5, DiCss3, DiJsBadge, DiPhp } from "react-icons/di";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiJsBadge className="text-7xl text-yellow-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiHtml5 className="text-7xl text-orange-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiCss3 className="text-7xl text-blue-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiPython className="text-7xl text-blue-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiPhp className="text-7xl text-purple-700" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
