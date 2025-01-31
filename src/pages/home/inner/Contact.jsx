import { FaDiscord, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import { PageContainer } from "../../../components";

const Contact = () => {
  return (
    <PageContainer
      className={
        "bg-primary-700 w-calc-1 max-w-5xl mx-auto mb-4 py-12 rounded-xl flex justify-center items-center"
      }
    >
      <section className="w-full max-w-lg">
        <article className="w-full flex flex-col items-center justify-center gap-4">
          <p className="text-center text-lg md:text-xl text-primary-lighter-900 max-w-xl">
            Subscribe to learn how to 100x your capital and become wealthier for
            our signals.
          </p>

          <form className="w-full max-w-xs md:max-w-md ">
            <div className="flex items-center w-full h-12 relative">
              <input
                className="w-full h-full bg-primary-lighter-900 text-neutral-900 border border-neutral-900 rounded-lg  px-4 focus:outline-none text-sm placeholder:text-dark-700"
                id="email"
                name="email"
                placeholder="Email"
                type="email"
              />
              <button
                type="submit"
                className="text-primary-lighter-900 bg-neutral-900 px-3 py-2 rounded-lg absolute right-1"
              >
                submit
              </button>
            </div>
          </form>

          <div>
            <ul className="flex items-center gap-4 text-2xl">
              <li>
                <a href="#" className="text-blue-900">
                  <FaDiscord />
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600">
                  <FaTelegram />
                </a>
              </li>
              <li>
                <a href="#" className="text-pink-700">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#" className="text-red-600">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </PageContainer>
  );
};

export default Contact;
