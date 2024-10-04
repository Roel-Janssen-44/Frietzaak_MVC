"use client";

import Button from "./Button";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const pathname = useLocation().pathname;

  return (
    <nav className="w-full bg-white shadow-md py-2 absolute top-0 left-0">
      <div className="flex flex-row justify-center items-center justify-between container mx-auto">
        <NavLink to="/">
          <img src="/logo.png" alt="Logo De Krokante Hap" className="w-20" />
        </NavLink>
        <ul className="flex flex-row gap-6 items-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/miel">(Miel page)</NavLink>
          </li>
          {/* {!pathname.includes("dashboard/owner") && (
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          )} */}
          {pathname.includes("dashboard/owner") && (
            <>
              <li>
                <NavLink to="/dashboard/owner/orders">Bestellingen</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/owner/products">Producten</NavLink>
              </li>
            </>
          )}
          {!pathname.includes("dashboard") && (
            <>
              <li>
                <Button priority="primary" link="/login">
                  Login
                </Button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
