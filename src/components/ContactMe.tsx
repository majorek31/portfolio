import { useModal } from "../contexts/modalContext";
import ContactModal from "./modals/ContactModal";

type AboutMeProps = {};

export default function AboutMe({}: AboutMeProps) {
  const { openModal } = useModal();
  return (
    <div className="m-5 flex max-sm:flex-col">
      <div className="flex gap-5 flex-col">
        <h1 className="text-xl">Contact me</h1>
        <p>You can contact by variety of different methods!</p>
        <ul className="list-disc">
          <li>
            Write an{" "}
            <a href="mailto:mborucki07@gmail.com" className="underline">
              E-Mail here
            </a>
          </li>
          <li>
            Find me on{" "}
            <a
              href="https://www.linkedin.com/in/maksymilian-borucki-98790929b/"
              target="_blank"
              className="underline"
            >
              LinkedIn here
            </a>
          </li>
          <li>
            Or if You prefer,{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => openModal(<ContactModal />, "Get in touch")}
            >
              leave your message here
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
