import { PageContainer, SectionTitle } from "../../../components";
import { homeData } from "../../../data/home";

const About = () => {
  return (
    <PageContainer className={"w-full py-12 grid gap-4"}>
      <SectionTitle title={"About"} />

      <div>
        <video src={homeData.aboutVid} autoPlay loop></video>
      </div>
    </PageContainer>
  );
};

export default About;
