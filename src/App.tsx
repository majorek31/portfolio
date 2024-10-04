import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Container from "./components/Container";
import InfoCard from "./components/InfoCard";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";

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
          <ContactMe />
        </InfoCard>
      </Container>
      <Footer />
    </div>
  );
}
