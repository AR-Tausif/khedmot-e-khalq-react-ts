import React from "react";
import LoginForm from "./LoginForm";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center min-h-screen py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <LoginForm />
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <NavLink to="/register" className="underline">
              Sign up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
