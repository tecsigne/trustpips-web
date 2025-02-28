const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-8 items-start">
      <h2 className="font-medium text-center text-3xl max-w-[500px]">
        {title}
      </h2>

      {subtitle && (
        <p className="text-center md:text-left max-w-[640px] text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
