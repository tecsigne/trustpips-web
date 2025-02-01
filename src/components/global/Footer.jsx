import { FaRegCopyright } from "react-icons/fa";
import PageContainer from "./PageContainer";
import FooterLink from "./inner/FooterLinks";
import { footerNavRoutes } from "../../data/constant";

const Footer = () => {
  return (
    <PageContainer
      className={
        "w-calc-1 max-w-7xl mx-auto mb-4 bg-primary-light-300 rounded-xl py-4"
      }
    >
      <section className="w-full max-w-4xl mx-auto flex flex-col items-center gap-4">
        <article className="w-full flex flex-col gap-4 justify-between min-[650px]:flex-row items-center">
          <div>
            <p className="flex items-center gap-1">
              <span>
                <FaRegCopyright />
              </span>
              TrustPips. All Rights Reserved.
            </p>
          </div>

          <FooterLink routes={footerNavRoutes} horizontal />
        </article>
        <article>
          <p>
            Designed and Developed by{" "}
            <a href="#" className="text-primary-900">
              Tecsigne
            </a>
          </p>
        </article>
      </section>
    </PageContainer>
  );
};

export default Footer;
