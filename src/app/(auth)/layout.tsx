import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto pt-20">
      <div className="flex justify-center">{children}</div>
    </div>
  );
};

export default AuthLayout;
