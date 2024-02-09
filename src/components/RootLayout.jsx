import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <main>
        <h2>Welcome to Campus Talents Movies!</h2>
      </main>
      <Outlet />
    </>
  );
}
