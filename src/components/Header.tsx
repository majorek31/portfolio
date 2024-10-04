import GithubWhite from "../assets/github-mark.webp";
import MajorekIcon from "../assets/majorek-icon.webp";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  return (
    <div className="sticky top-0 bg-white">
      <div className="max-lg:hidden w-full flex justify-evenly items-center p-4 shadow-lg">
        <div className="flex justify-start items-center gap-3 w-1/3">
          <a href="#">
            <img className="w-10" src={MajorekIcon} alt="majorek's duck icon" />
          </a>
          <h1 className="text-2xl w-1/3">majorek</h1>
        </div>

        <ul className="flex justify-center w-1/3 items-center list-none gap-8">
          <li className="text-lg">About me</li>
          <li className="text-lg">My projects</li>
          <li className="text-lg">Contact</li>
        </ul>

        <div className="w-1/3 flex justify-end gap-4">
          <a href="https://github.com/majorek31" target="_blank">
            <img src={GithubWhite} className="w-8" alt="Github profile" />
          </a>
        </div>
      </div>
    </div>
  );
}
