"use client";
import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import React from "react";

function page() {
  return (
    <div>
      <SignIn />
    </div>
  );
}

export default page;
