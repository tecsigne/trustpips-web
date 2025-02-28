import { PageContainer, SectionTitle } from "../../../components";
import { ServiceCard } from "../../../components/pages";
import { ServicesData } from "../../../data/services";

const Service = () => {
  return (
    <PageContainer className={"max-w-5xl mx-auto py-12 grid gap-4"}>
      <SectionTitle title={"Our Services"} />

      <section className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {ServicesData.map((data, index) => {
          return <ServiceCard key={index} {...data} />;
        })}
      </section>
    </PageContainer>
  );
};

export default Service;
