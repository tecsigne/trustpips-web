import { FaTimes } from "react-icons/fa";
import { useActionContext } from "../../../contexts";
import { RouteNames, mobileNavRoutes } from "../../../data/constant";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const { closeMobileNav } = useActionContext();

  return (
    <section
      className={`bg-neutral-900 w-calc-vw-1 h-[550px] p-4 flex flex-col justify-between rounded-3xl`}
    >
      <button
        type="button"
        onClick={closeMobileNav}
        className="self-end text-primary-lighter"
      >
        <FaTimes className="text-xl font-medium" />
      </button>

      <ul className="flex flex-col gap-6">
        {mobileNavRoutes.map(({ path, label }, index) => (
          <li key={index} className="w-full">
            <Link
              onClick={closeMobileNav}
              to={path}
              className={`px-5 py-3 flex items-center gap-3 text-primary-lighter`}
            >
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="w-full h-12 self-stretch flex text-center">
        <Link
          to={RouteNames.Contact.path}
          className="w-full p-3 bg-primary-800 text-primary-lighter text-lg rounded-3xl"
          onClick={closeMobileNav}
        >
          {RouteNames.Contact.label}
        </Link>
      </div>
    </section>
  );
};

export default MobileNav;
