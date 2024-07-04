import React from "react";
import { CardDescription, CardHeader, CardTitle } from "../ui/card";

const AuthHeader = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{desc}</CardDescription>
    </CardHeader>
  );
};

export default AuthHeader;
