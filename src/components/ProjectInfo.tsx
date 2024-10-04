import { ReactNode } from "react";
import { useModal } from "../contexts/modalContext";

type ProjectInfoProps = {
  children: ReactNode;
  title: string | null;
  imgSrc?: string | null;
  className?: string | null;
};

export default function ProjectInfo({
  children,
  title,
  imgSrc,
  className,
}: ProjectInfoProps) {
  const { openModal } = useModal();
  return (
    <div
      className={
        "size-32 text-lg flex justify-center items-end cursor-pointer rounded-md mt-2 p-2 select-none " +
        className
      }
      onClick={() => openModal(children, title)}
    >
      <p className="text-white absolute text-center">{title}</p>
      {imgSrc && <img src={imgSrc} alt={title ? title : "Untitled"} />}
    </div>
  );
}
