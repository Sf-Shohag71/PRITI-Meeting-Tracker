import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Layout() {
  return (
    <>
      <Navigation />
      <main className="p-4 sm:p-6">
        <Outlet />
      </main>
    </>
  );
}
