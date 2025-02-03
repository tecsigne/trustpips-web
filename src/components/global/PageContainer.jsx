const PageContainer = ({ children, className }) => {
  return (
    <section className={`px-4 md:px-[7%] ${className || ""}`}>
      {children}
    </section>
  );
};

export default PageContainer;
