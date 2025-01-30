import { HiBars3CenterLeft } from "react-icons/hi2";
import NavLinks from "./inner/NavLinks";
import Logo from "./Logo";
import { useActionContext } from "../../contexts";
import Modal from "./Modal";
import MobileNav from "./inner/MobileNav";

const NavBar = () => {
  const { closeMobileNav, mobileNavOpened, openMobileNav } = useActionContext();
  return (
    <>
      <header
        className={
          "w-calc-1 max-w-5xl mt-4 mx-auto bg-primary-lighter-100 py-4 px-8 min-[650px]:px-[7%] border border-primary-lighter-900 rounded-2xl flex justify-between items-center"
        }
      >
        <Logo className={"min-[650px]:text-lg"} />

        <NavLinks className={"hidden gap-8 min-[650px]:flex"} />

        <button
          type="button"
          onClick={openMobileNav}
          className="block text-2xl min-[650px]:hidden"
        >
          <HiBars3CenterLeft />
        </button>
      </header>

      <Modal
        opened={mobileNavOpened}
        onClose={() => {
          closeMobileNav();
        }}
        className={"grid justify-center items-center min-[650px]:hidden"}
      >
        <MobileNav />
      </Modal>
    </>
  );
};

export default NavBar;
