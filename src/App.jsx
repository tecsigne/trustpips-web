import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Footer, NavBar, NotFound } from "./components";

const App = () => {
  return (
    <>
      <NavBar />

      <main className="min-h-screen font-medium no-scrollbar">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
