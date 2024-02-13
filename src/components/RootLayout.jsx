import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export function RootLayout() {
  return (
    <>
      <NavBar />
      <main>
        <h2>Welcome to Campus Talents Movies!</h2>
        <Outlet />
      </main>
    </>
  );
}
