import PageContainer from "../global/PageContainer";
import TestimonialCard from "./TestimonialCard";
import { testimonialData } from "../../data/testimonial";
import SectionTitle from "../global/SectionTitle";

const Testimonial = () => {
  return (
    <PageContainer className={"max-w-5xl mx-auto py-12 grid gap-4"}>
      <SectionTitle title={"Our Reviews"} />

      <section className="w-full flex gap-4 justify-between overflow-y-hidden overflow-x-scroll">
        {testimonialData.map((data, index) => (
          <TestimonialCard key={index} {...data} />
        ))}
      </section>
    </PageContainer>
  );
};

export default Testimonial;
