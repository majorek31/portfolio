import { ReactNode } from "react";

type AboutMeProps = {
  children: ReactNode;
};

export default function AboutMe({ children }: AboutMeProps) {
  return (
    <div className="w-full lg:w-7/12 bg-gray-100 shadow-lg p-2 m-2 max-sm:self-center md:even:self-end rounded-lg">
      {children}
    </div>
  );
}
