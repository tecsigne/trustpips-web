const PageContainer = ({ children, className }) => {
  return (
    <section className={`px-4 md:px-[7%] lg:px-0 ${className || ""}`}>
      {children}
    </section>
  );
};

export default PageContainer;
