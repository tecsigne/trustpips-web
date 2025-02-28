import { PageContainer, SectionHeader } from "../../../components";
import { contactData } from "../../../data/contactData";
import ContactCard from "./ContactCard";

const ReachUs = () => {
  return (
    <PageContainer className={"w-full max-w-5xl mx-auto py-12 grid gap-4"}>
      <SectionHeader
        title={"Contact Us"}
        subtitle={
          "Contact us with one of these or Subcribe to our newsletter and follow us on social media"
        }
      />

      <section className="w-full py-8 grid-cols-1 grid sm:grid-cols-3 place-content-center gap-8">
        {contactData.map((data, index) => (
          <ContactCard key={index} {...data} />
        ))}
      </section>
    </PageContainer>
  );
};

export default ReachUs;
