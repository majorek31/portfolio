type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <footer className="w-full flex justify-center items-center">
      <div className="w-11/12 flex justify-center items-center border-t-2 pt-3">
        <p>
          <a
            href="https://github.com/majorek31"
            target="_blank"
            className="underline pb-2"
          >
            Maksymilian Borucki
          </a>{" "}
          &copy;
        </p>
      </div>
    </footer>
  );
}
