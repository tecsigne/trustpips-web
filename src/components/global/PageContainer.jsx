const PageContainer = ({ children, className }) => {
  return <section className={`px-[7%] ${className || ""}`}>{children}</section>;
};

export default PageContainer;
