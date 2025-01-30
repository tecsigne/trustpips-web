import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Logo = ({ className }) => {
  return (
    <div className={`${className || ""}`}>
      <Link
        to={"/"}
        className="flex gap-2 items-center font-poppins text-xl uppercase"
      >
        <span className="text-2xl text-primary-900">
          <FaArrowTrendUp />
        </span>{" "}
        TrustPips
      </Link>
    </div>
  );
};

export default Logo;
