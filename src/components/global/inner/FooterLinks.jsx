import { Link } from "react-router-dom";

const FooterLink = ({
  routes,
  showIcon,
  defaultLink,
  hideText,
  horizontal,
}) => {
  if (!routes || !Array.isArray(routes)) {
    routes = [];
  }

  return (
    <ul
      className={`flex ${
        horizontal ? "flex-row items-center" : "flex-col items-start"
      } gap-6`}
    >
      {routes.map(({ path, label, Icon, type }, index) => (
        <li key={index} className="text-base">
          {defaultLink || type === "hash" ? (
            <a
              href={path}
              className={`inline-flex ${
                horizontal ? "hover:translate-y-2" : "hover:pl-2"
              } duration-300 gap-2 items-center`}
            >
              {Icon && showIcon && (
                <span>
                  <Icon className="w-5" />
                </span>
              )}
              {!hideText && <span>{label}</span>}
            </a>
          ) : (
            <Link
              to={path}
              className={`inline-flex ${
                horizontal ? "hover:translate-y-2" : "hover:pl-2"
              } duration-300 gap-2 items-center`}
            >
              {Icon && showIcon && (
                <span>
                  <Icon className="w-5" />
                </span>
              )}
              {!hideText && <span>{label}</span>}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default FooterLink;
