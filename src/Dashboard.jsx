import ConfettiBackground from "./components/ConfettiBackground/ConfettiBackground";
import SectionOne from "./components/section-one/section-one";
import SectionTwo from "./components/section-two/section-two";

function Dashboard() {
  return (
    <>
      <ConfettiBackground particleCount={150} backgroundColor="transparent" />
      <SectionOne />
      <SectionTwo />
    </>
  );
}

export default Dashboard;
