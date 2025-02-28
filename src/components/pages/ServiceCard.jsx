import { FaRegCheckCircle } from "react-icons/fa";

const ServiceCard = ({ title, desc1, desc2, desc3 }) => {
  return (
    <div className="h-56 grid gap-2 p-4 border border-primary-600 rounded-lg">
      <h4 className="text-xl">{title}</h4>

      <ul className="flex flex-col gap-4 text-sm">
        <li className="flex gap-3 items-center">
          <span className="text-primary-900 text-base">
            <FaRegCheckCircle />
          </span>
          <span>{desc1}</span>
        </li>
        <li className="flex gap-3 items-center">
          <span className="text-primary-900 text-base">
            <FaRegCheckCircle />
          </span>
          <span>{desc2}</span>
        </li>
        <li className="flex gap-3 items-center">
          <span className="text-primary-900 text-base">
            <FaRegCheckCircle />
          </span>
          <span>{desc3}</span>
        </li>
      </ul>
    </div>
  );
};

export default ServiceCard;
