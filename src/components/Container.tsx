import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="h-full w-full flex p-4 flex-col items-star">{children}</div>
  );
}
