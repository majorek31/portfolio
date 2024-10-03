import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Container from "./components/Container";

export default function App() {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <Container>
        <AboutMe />
      </Container>
    </div>
  );
}
