import { Outlet } from "react-router";
import { Navbar } from "../navbar/navbar";
import Footer from "../footer/footer";
import "./cardLayout.scss";

export function CardLayout() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
