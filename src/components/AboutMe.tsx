type AboutMeProps = {};

export default function AboutMe({}: AboutMeProps) {
  return (
    <div className="m-5 flex max-sm:flex-col">
      <div className="flex gap-5 flex-col">
        <h1 className="text-xl">
          Hello, my name is <b>Maks</b>
        </h1>
        <p>
          I'm a <b>C/C++</b> Developer with a passion for{" "}
          <b>Reverse Engineering</b> and <b>low-level programming</b>. My
          experience spans building performance-critical systems, working with{" "}
          <b>IDA Pro</b> for reverse engineering, and solving complex software
          challenges. While I occasionally work on frontend development using{" "}
          <b>React</b>, my primary focus is on <b>backend</b>,{" "}
          <b>systems programming</b>, and <b>security-related</b> tasks.
        </p>
        <ul>
          <li>
            🔭 Primary focus: Deep expertise in C/C++ development for systems
            programming, performance-critical applications, and low-level
            software design.
          </li>
          <li>
            🛠️ I specialize in Reverse Engineering using IDA Pro for analyzing
            binaries, debugging, and software decompilation.
          </li>
          <li>
            🌱 Continuously learning more about exploits, malware analysis, and
            improving my reverse engineering skillset.
          </li>
          <li>
            💻 While I dabble in frontend development using React, it is
            secondary to my primary interests in backend systems and security.
          </li>
        </ul>
      </div>
      <img
        className="md:border-l-4 max-sm:border-t-4 m-2"
        src="https://avatars.githubusercontent.com/u/76913151?v=4"
        alt="majorek"
      />
    </div>
  );
}
