const SectionTitle = ({ title }) => {
  return (
    <article className="w-full flex flex-col gap-2 items-start">
      <h3 className="py-1 px-3 border border-primary-900 bg-primary-400 text-base text-primary-lighter-900 rounded-full">
        {title}
      </h3>
    </article>
  );
};

export default SectionTitle;
