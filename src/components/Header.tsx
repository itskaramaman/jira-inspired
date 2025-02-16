import React from "react";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-8 border-gray-700 bg-gray-900 border-b-2 fixed left-0 right-0">
      <div>
        <Link href="/" className="flex gap-1">
          <p className="bg-blue-500 text-white p-1 w-6 text-center">S</p>
          <p className="bg-pink-500 text-white p-1 w-6 text-center">C</p>
          <p className="bg-purple-500 text-white p-1 w-6 text-center">R</p>
          <p className="bg-green-500 text-white p-1 w-6 text-center">U</p>
          <p className="bg-yellow-500 text-white p-1 w-6 text-center">M</p>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/project/create">
          <Button variant="destructive">
            <PenBox />
            <span>Create Project</span>
          </Button>
        </Link>
        <SignedOut>
          <Link href="/sign-in">
            <Button variant="outline">Sign In</Button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserMenu />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;
