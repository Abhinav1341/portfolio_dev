import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div className="absolute top-10 left-0 right-0 flex justify-center items-center mt-3">
      <div
        className={`${
          type === `danger` ? " bg-red-700" : `bg-emerald-700`
        } px-4 py-1 text-indigo-100 leading-none rounded-md lg-rounded-full flex lg:inline-flex gap-3 items-center shadow-4xl`}
        role="alert"
      >
        <p
          className={`${
            type === `danger` ? " bg-red-400" : `bg-emerald-400`
          } flex rounded-full uppercase px-3 py-[0.39rem] align-middle font-semibold my-3 text-xs items-center `}
        >
          {type === `danger` ? `Failed!?` : `Success!!`}
        </p>
        <p className="my-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
