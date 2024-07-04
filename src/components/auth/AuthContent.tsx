import React from "react";
import { CardContent, CardDescription, CardFooter } from "../ui/card";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface AuthContentProps {
  children: React.ReactNode;
  labelHref: string;
  href: string;
  labelSubmit: string;
}

const AuthContent: React.FC<AuthContentProps> = ({
  children,
  href,
  labelHref,
  labelSubmit,
}) => {
  return (
    <>
      <CardContent className="flex flex-col gap-2">
        {children}
        <CardDescription className="text-center">
          <Link to={href} className="underline text-blue-400 text-sm">
            {labelHref}
          </Link>
        </CardDescription>
      </CardContent>

      <CardFooter className="flex justify-between w-full">
        <Button type="submit" className="w-full">
          {labelSubmit}
        </Button>
      </CardFooter>
    </>
  );
};

export default AuthContent;
