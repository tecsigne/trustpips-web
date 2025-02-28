import { PageContainer, SectionTitle } from "../../../components";
import { TestimonialCard } from "../../../components/pages";
import { testimonialData } from "../../../data/testimonial";

const Testimonials = () => {
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

export default Testimonials;
