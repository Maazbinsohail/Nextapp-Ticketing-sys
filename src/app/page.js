"use client";

import { _useAuth } from "@/context/Auth";
import Link from "next/link";

const LandingPage = () => {
  const [auth] = _useAuth();
  return (
    <div style={{ minHeight: "100vh" }} className="d-flex flex-column justify-content-center align-items-center px-2">
      <h3 className="display-1 ">Ticketing System</h3>
      <i style={{ maxWidth: "800px", textAlign: "center" }}>
      Simplify support with our streamlined ticketing system 
      </i>
      <div>
        <button className="myBtnSecondary mt-5">
          {!auth ? (
            <Link className="_link" href={"/auth/login"}>
              Login
            </Link>
          ) : (
            <>
              {auth?.role === "agent" ? (
                <Link className="_link" href={"/agent"}>
                  dashbaord
                </Link>
              ) : (
                <Link className="_link" href={"/admin"}>
                  dashbaord
                </Link>
              )}
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
