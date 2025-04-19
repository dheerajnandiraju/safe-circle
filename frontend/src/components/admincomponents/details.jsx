import React from "react";
import { AiOutlineHome, AiOutlineRise } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { BiBuildings } from "react-icons/bi";

import { MdAddHome } from "react-icons/md";

import { MdOutlineMoneyOff } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
function Details() {
  return (
    <div>
      <div className="flex flex-row text-text-primary gap-6">
        {/* Total Projects Card */}
        <div
          className="flex flex-row gap-4 w-full items-center h-28 bg-background-components px-4 py-2 border-rounded rounded-2xl border-border-secondary border-[3px]"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="text-2xl rounded-full bg-blue-400 p-2">
            <IoPersonOutline />
          </div>
          <div className="flex flex-col w-full gap-1">
            <div className="text-gray-700 font-semibold">Employees</div>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-semibold font-mono">30</div>
              <div className="text-green-700 inline-flex text-sm items-center bg-background-main rounded-md px-1">
                <AiOutlineRise />
                12
              </div>
            </div>
          </div>
        </div>

        {/* Total Students Card */}
        <div
          className="flex flex-row gap-4 w-full items-center h-28 bg-background-components px-4 py-2 border-rounded rounded-2xl border-border-secondary border-[3px]"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="text-2xl rounded-full bg-orange-400 p-2">
            <AiOutlineHome />
          </div>
          <div className="flex flex-col w-full gap-1">
            <div className="text-gray-700 font-semibold">Recidents</div>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-semibold font-mono">29</div>
              <div className="text-green-700 inline-flex text-sm items-center bg-background-main rounded-md px-1">
                <AiOutlineRise />2
              </div>
            </div>
          </div>
        </div>

        {/* Departments Card */}
        <div
          className="flex flex-row gap-4 w-full items-center h-28 bg-background-components px-4 py-2 border-rounded rounded-2xl border-border-secondary border-[3px]"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="text-2xl rounded-full bg-indigo-500 p-2">
            <BiBuildings />
          </div>
          <div className="flex flex-col w-full gap-1">
            <div className="text-gray-700 font-semibold">Total flats</div>
            <div className="flex items-center justify-between">
              <div className="text-xl font-medium font-mono">30</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row text-text-primary gap-6 mt-4">
        {/* Approval(s) pending Card */}
        <div
          className="flex flex-row gap-4 w-full items-center h-28 bg-background-components px-4 py-2 border-rounded rounded-2xl border-border-secondary border-[3px]"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="text-2xl rounded-full bg-blue-300 p-2">
            <MdAddHome />
          </div>
          <div className="flex flex-col w-full gap-1">
            <div className="text-gray-700 font-semibold">vacant flats</div>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-semibold font-mono">50</div>
              <div className="text-green-700 inline-flex text-sm items-center bg-background-main rounded-md px-1">
                <AiOutlineRise />4
              </div>
            </div>
          </div>
        </div>
        {/* .................................. */}
        <div
          className="flex flex-row gap-4 w-full items-center h-28 bg-background-components px-4 py-2 border-rounded rounded-2xl border-border-secondary border-[3px]"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="text-2xl rounded-full bg-green-700 p-2">
            <GiReceiveMoney />
          </div>
          <div className="flex flex-col w-full gap-1">
            <div className="text-gray-700 font-semibold">
              Maintainence collected
            </div>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-semibold font-mono">$20,250</div>
              <div className="text-green-700 inline-flex text-sm items-center bg-background-main rounded-md px-1">
                <AiOutlineRise />4
              </div>
            </div>
          </div>
        </div>
        {/* .................................. */}
        <div
          className="flex flex-row gap-4 w-full items-center h-28 bg-background-components px-4 py-2 border-rounded rounded-2xl border-border-secondary border-[3px]"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="text-2xl rounded-full bg-red-200 p-2">
            <MdOutlineMoneyOff />
          </div>
          <div className="flex flex-col w-full gap-1">
            <div className="text-gray-700 font-semibold">Maintainence due</div>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-semibold font-mono">$5,000</div>
              <div className="text-green-700 inline-flex text-sm items-center bg-background-main rounded-md px-1">
                <AiOutlineRise />4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
