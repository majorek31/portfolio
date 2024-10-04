import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Container from "./components/Container";
import InfoCard from "./components/InfoCard";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
import MyProjects from "./components/MyProjects";
import ProjectInfo from "./components/ProjectInfo";
import UserIcon from "./assets/user-icon.svg";

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
          <MyProjects />
          <div className="flex justify-center items-center border-t-2 gap-4">
            <ProjectInfo
              title="My portfolio"
              imgSrc={UserIcon}
              className="bg-red-500"
            >
              <div className=""></div>
            </ProjectInfo>
            <ProjectInfo title="Test" imgSrc={UserIcon}>
              <div className=""></div>
            </ProjectInfo>
            <ProjectInfo title="Test" imgSrc={UserIcon}>
              <div className=""></div>
            </ProjectInfo>
          </div>
        </InfoCard>
        <InfoCard>
          <ContactMe />
        </InfoCard>
      </Container>
      <Footer />
    </div>
  );
}
