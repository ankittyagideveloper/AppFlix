import React from "react";

function Services({ heading, values }) {
  console.log(heading, values);
  return (
    <div className="w-[300px]">
      <div key={heading} className=" p-6 bg-[#2C3039] m-2">
        <h2 className="text-white font-semibold text-3xl mb-2 bg-[#2C3039] border-b-[1px]  border-[#8a94a73d] pb-6">
          {heading.slice(0, 1).toUpperCase() + heading.slice(1, heading.length)}
        </h2>
        <ul className=" text-[#8a94a7] ">
          {values.map((service, key) => (
            <li
              key={key}
              className="border-b-[1px] px-0 py-[14px] border-[#8a94a73d] bg-[#2C3039] "
            >
              <img
                className="inline bg-[#2C3039]"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUuNiA2LjRMMS42IDQgMCA1LjYgNS42IDEyIDE2IDEuNiAxNC40IDB6IiBmaWxsPSIjMDJDQkIxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
                alt="check"
              />
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Services;
