import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {

  return (
    <div id="main-container" style={{ overflowY: "auto", height: "100vh", overflowX: "hidden" }}>
      <Header />
      <Outlet /> {/* This will load the current route content */}
    </div>
  );
};

export default Layout;
