import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Footer, NavBar } from "./components";

const App = () => {
  return (
    <>
      <NavBar />

      <main className="min-h-screen font-medium no-scrollbar">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
