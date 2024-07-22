// app/not-found.tsx
import { FC } from "react";
import Link from "next/link";

const NotFound: FC = () => {
  return (
    <div style={{ textAlign: "center" }} className="py-20">
      <div className="p-2 bg-slate-800 w-[70%] md:w-[50%] m-auto py-10">
        <h1>IF you are Already Signuped so go to signin page: </h1>
        <h2 className="my-3">
          Click Here:{" "}
          <Link href="/signin" className="p-2 bg-blue-800 rounded-md">
            Go to Sign-in
          </Link>
        </h2>
      </div>
      <div className="p-2 bg-slate-800 w-[70%] md:w-[50%] m-auto py-10">
        <h1>IF you are new user so go to signup page: </h1>
        <h2 className="my-3">
          Click Here:{" "}
          <Link href="/signup" className="p-2 bg-blue-800 rounded-md">
            Go to Sign-up
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
