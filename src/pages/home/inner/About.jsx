import { PageContainer, SectionTitle } from "../../../components";
import { homeData } from "../../../data/home";

const About = () => {
  return (
    <PageContainer className={"max-w-5xl mx-auto py-12 grid gap-4"}>
      <SectionTitle title={"About Us"} />

      <div className="w-full flex flex-col md:flex-row gap-8">
        <article className="w-full">
          <p className="w-full md:max-w-lg text-left">
            At TrustPips, we are dedicated to empowering traders on their
            journey toward financial independence and the ability to trade
            full-time. Recognizing that every trader is unique, we prioritize
            personalized development. Our tailored approach ensures that each
            individual receives the guidance and support needed to thrive in the
            trading world.
          </p>
        </article>

        <div className="w-full h-[200px] min-sm:h-[300px]">
          <video
            autoPlay
            loop
            muted
            controls={false}
            className="w-full h-full object-cover object-center"
          >
            <source src={homeData.aboutVid} type="video/mp4" />
            Your browser does not support the video tag
          </video>
        </div>
      </div>
    </PageContainer>
  );
};

export default About;
