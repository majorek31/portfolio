import DownArrow from "../assets/down-arrow.svg";

type AboutMeProps = {};

export default function AboutMe({}: AboutMeProps) {
  return (
    <div className="w-full bg-gray-100 flex flex-col justify-center items-center p-4">
      <h1 className="text-2xl shadow-sm rounded-lg p-2">
        Welcome to my Portfolio
      </h1>
      <img src={DownArrow} alt="Go down" className="size-8 mt-16" />
    </div>
  );
}
