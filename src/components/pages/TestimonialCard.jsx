import { LuDot } from "react-icons/lu";

const TestimonialCard = ({ imgUrl, name, jobTitle, review }) => {
  return (
    <div className="w-[23rem] max-[420px]:w-full h-72 bg-[#25282C] flex flex-col items-start justify-between p-4 overflow-hidden text-sm rounded-lg shrink-0">
      <div className="relative ml-2 mt-2">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src={imgUrl}
            alt={`${name} Profile`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <p>{review.length > 191 ? review.slice(0, 190) + "." : review}</p>
      <div className="w-full inline-flex gap-2 pt-4 border-t border-t-primary-lighter-500">
        <p>{name}</p>{" "}
        <LuDot className="align-middle text-primary-900 text-2xl" />{" "}
        <p className="text-primary">{jobTitle}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
