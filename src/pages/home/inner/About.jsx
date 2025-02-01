import { SectionTitle } from "../../../components";
import { homeData } from "../../../data/home";

const About = () => {
  return (
    <section className={"w-calc-1 max-w-5xl mx-auto py-12 grid gap-4"}>
      <SectionTitle title={"About Us"} />

      <div className="w-full flex flex-col sm:flex-row gap-8">
        <article className="w-full">
          <p className="text-left max-w-sm  ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            veritatis incidunt impedit! Assumenda dolor voluptatibus earum quod,
            itaque quo corrupti? Hic iure est iusto incidunt natus accusamus
            minus numquam deleniti nesciunt! Inventore tempora harum veniam
            illum, maiores officiis reiciendis suscipit at itaque blanditiis,
            ullam deleniti eos autem, ex sapiente sunt?
          </p>
        </article>

        <div className="w-full h-[200px] min-sm:h-[300px] bg-red-700">
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
    </section>
  );
};

export default About;
