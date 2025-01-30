import { ActionProvider } from "../../contexts";

const Provider = ({ children }) => {
  return (
    <>
      <ActionProvider>{children}</ActionProvider>
    </>
  );
};

export default Provider;
