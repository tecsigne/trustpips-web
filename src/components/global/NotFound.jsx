import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../data/constant";
import PageContainer from "./PageContainer";
import { FaArrowTrendDown } from "react-icons/fa6";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <PageContainer className="w-full h-screen fixed top-0 left-0 z-[100000] bg-neutral-950 text-primary-lighter-900 flex justify-center items-center">
      <div className="grid place-items-center gap-4">
        <h2 className="font-semibold text-center text-9xl text-red-700 animate-pulse">
          <FaArrowTrendDown />
        </h2>

        <p className="text-center text-base font-medium max-w-[500px] mb-4">
          Oops! The Page You Are Looking For Is Not Available At The Moment.
        </p>

        <div className="flex gap-4">
          <button
            className=" px-4 py-2 rounded-full bg-primary-900 text-primary-lighter-900 font-medium"
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </button>
          <Link
            to={RouteNames.Home.path}
            className=" px-4 py-2 rounded-full bg-transparent text-primary-lighter-900 font-medium border border-primary-900"
          >
            Go Home
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default NotFound;
