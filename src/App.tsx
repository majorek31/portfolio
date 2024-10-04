import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Container from "./components/Container";
import InfoCard from "./components/InfoCard";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <Container>
        <Welcome />
        <InfoCard>
          <AboutMe />
        </InfoCard>
        <InfoCard>
          <AboutMe />
        </InfoCard>
        <InfoCard>
          <AboutMe />
        </InfoCard>
      </Container>
    </div>
  );
}
