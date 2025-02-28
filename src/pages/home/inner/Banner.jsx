import { Link } from "react-router-dom";
import { PageContainer } from "../../../components";
import { homeData } from "../../../data/home";

const Banner = () => {
  return (
    <PageContainer
      className={"w-full mt-4 py-12 flex justify-center items-center"}
    >
      <article className="w-full max-w-4xl flex flex-col justify-center items-center gap-8">
        <div className="text-center grid gap-4">
          <h3 className="text-2xl sm:text-3xl">All-In-One Place For Trading</h3>

          <p className="text-base sm:text-lg">
            We empower traders on their journey to financial independence,
            offering personalized development to meet each trader's unique
            needs.
          </p>

          <ul className="flex gap-8 items-center mx-auto mt-2">
            <li>
              <Link
                to={"/about"}
                className="bg-transparent py-2 border-b border-b-primary-900"
              >
                Learn More
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="bg-primary-900 py-2 px-6 rounded-2xl"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          <img
            src={homeData.bannerImg}
            alt="Trade view"
            className="w-full h-[200px] sm:h-[300px] md:h-[45vh] rounded-2xl object-center object-cover"
          />
        </div>
      </article>
    </PageContainer>
  );
};

export default Banner;
