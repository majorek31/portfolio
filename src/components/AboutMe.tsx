import { useModal } from "../contexts/modalContext";
import ContactModal from "./ContactModal";

type AboutMeProps = {};

export default function AboutMe({}: AboutMeProps) {
  const { openModal } = useModal();

  return (
    <>
      <button onClick={() => openModal(<ContactModal />, "Get in touch")}>
        Open modal
      </button>
    </>
  );
}
