const ContactCard = ({ Icon, title, label, path, height }) => {
  return (
    <div
      className={`w-full p-4 flex flex-col gap-4 justify-center items-center border border-primary-900 rounded-lg ${
        height ? height : ""
      }`}
    >
      <p>
        <Icon className="w-9 text-primary-900 text-2xl" />
      </p>

      <h3 className="text-xl">{title}</h3>

      <a href={path} className="text-base text-gray-300">
        {label}
      </a>
    </div>
  );
};

export default ContactCard;
