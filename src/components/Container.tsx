import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Container = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="border flex flex-col w-full min-h-screen  items-center p-10 gap-5">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-2xl font-bold">Welcome to management Employee</h1>
        <p className="text-sm text-center max-w-60">
          You can update, delete, create data Employee and Devisi
        </p>
      </div>

      <div className="flex gap-3">
        <Link to={"/employee"}>
          <Button>Employee</Button>
        </Link>
        <Link to={"/devisi"}>
          <Button>Devisi</Button>
        </Link>
      </div>

      {children}
    </div>
  );
};

export default Container;
