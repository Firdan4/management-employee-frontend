import React from "react";
import { Card } from "../ui/card";

const AuthCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[400px]">{children}</Card>
    </div>
  );
};

export default AuthCard;
