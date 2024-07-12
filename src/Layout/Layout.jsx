import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <div className="font-work-sans container px-4 mx-auto ">
      <Header />
      <main className="mt-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
