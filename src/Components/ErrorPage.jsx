import React from "react";
import errorImage from "../assets/404-error-with-tired-person-concept-illustration_114360-7969.avif";
import { useRouteError } from "react-router-dom";
import ChangeTitle from "./ChangeTitle";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="flex">
        <ChangeTitle title='Error '></ChangeTitle>
      <img className="w-full h-screen" src={errorImage} alt="" />
      <div className="  md:p-10">
        {status && (
          <p className="md:text-8xl text-4xl py-6 font-extrabold">
            Error : {status}{" "}
          </p>
        )}
        <p className="font-semibold text-lg">{error?.message}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
