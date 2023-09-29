import React from "react";
import KanbanTitle from "./KanbanTitle";

function KanbanBoard() {
  return (
    <div className="flex flex-col bg-[#0D0B21] w-full  h-auto p-6 ">
      <KanbanTitle />

      {/* Main */}
      <div className="flex flex-row justify-between py-5 gap-5 overflow-auto ">
        {/* Todo list */}
        <div className="flex flex-col w-72 gap-5">
          {/* Title */}
          <div className="flex flex-row items-center justify-between">
            <p className="font-xl">To-Do List (24)</p>
            <img className="w-10 h-10" src="plus.svg" alt="" />
          </div>

          {/* list */}
          <div className="flex flex-col gap-4">
            {/* 1st card */}
            <div className="flex flex-col bg-[#211A75] p-3 gap-5 rounded-xl">
              {/* card priority*/}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-3">
                  <img className="w-4 h-4" src="important.svg" alt="" />
                  <p className="text-md text-[#FFAB2D]">Important</p>
                </div>
                <img className="flex" src="3dot_vertical.svg"></img>
              </div>

              {/* card title */}
              <p className="text-md">
                Create sign up sheet for holiday student/parent
              </p>

              {/* card progress */}
              <div>
                <div className="flex flex-row ">
                  <div className="w-64 h-2 rounded-xl bg-[#1E1C3A]">
                    <div className="h-full rounded-xl bg-[#FFAB2D] w-1/4"></div>
                  </div>
                </div>
              </div>

              {/* profile & dues */}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row overflow-hidden">
                  <div className="relative w-8 h-8 rounded-full bg-white border-2 border-[#15132B]  "></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B] "></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B]"></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B]"></div>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                  <img className="w-4 h-4" src="clock_small.svg" alt="" />
                  <span className="text-xs">Due in 4 days</span> 
                </div>
              </div>
            </div>

            {/* 2nd card */}
            <div className="flex flex-col bg-[#211A75] p-3 gap-5 rounded-xl">
              {/* card priority*/}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-3">
                  <img className="w-2 h-2" src="pinkdot.svg" alt="" />
                  <p className="text-md text-[#E328AF]">Instructor Meeting</p>
                </div>
                <img className="flex" src="3dot_vertical.svg"></img>
              </div>

              {/* card title */}
              <p className="text-md">
                Plan holiday demonstration program. Create outline.
              </p>

              {/* card progress */}
              <div>
                <div className="flex flex-row ">
                  <div className="w-64 h-2 rounded-xl bg-[#1E1C3A]">
                    <div className="h-full rounded-xl bg-[#E328AF] w-2/4"></div>
                  </div>
                </div>
              </div>

              {/* profile & dues */}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row overflow-hidden">
                  <div className="relative w-8 h-8 rounded-full bg-white border-2 border-[#15132B]  "></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B] "></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B]"></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B]"></div>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                  <img className="w-4 h-4" src="clock_small.svg" alt="" />
                  <span className="text-xs">Due in 4 days</span> 
                </div>
              </div>
            </div>

            {/* 3rd card */}
            <div className="flex flex-col bg-[#211A75] p-3 gap-5 rounded-xl">
              {/* card priority*/}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-3">
                  <img className="w-2 h-2" src="greendot.svg" alt="" />
                  <p className="text-md text-[#38E25D]">Database</p>
                </div>
                <img className="flex" src="3dot_vertical.svg"></img>
              </div>

              {/* card title */}
              <p className="text-md">
                Plan holiday demonstration program. Create outline.
              </p>

              {/* card progress */}
              <div>
                <div className="flex flex-row ">
                  <div className="w-64 h-2 rounded-xl bg-[#1E1C3A]">
                    <div className="h-full rounded-xl bg-[#38E25D] w-1/5"></div>
                  </div>
                </div>
              </div>

              {/* profile & dues */}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row overflow-hidden">
                  <div className="relative w-8 h-8 rounded-full bg-white border-2 border-[#15132B]  "></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B] "></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B]"></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B]"></div>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                  <img className="w-4 h-4" src="clock_small.svg" alt="" />
                  <span className="text-xs">Due in 4 days</span> 
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inprogress */}
        <div className="flex flex-col w-72 gap-5">
          {/* Title */}
          <div className="flex flex-row items-center justify-between">
            <p className="font-xl">In Progress (2)</p>
            <img className="w-10 h-10" src="inactive_plus.svg" alt="" />
          </div>

          {/* list */}
          <div className="flex flex-col gap-4">
            {/* 1st card */}
            <div className="flex flex-col bg-[#211A75] p-3 gap-5 rounded-xl">
              {/* card priority*/}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-3">
                  <img className="w-4 h-4" src="important.svg" alt="" />
                  <p className="text-md text-[#FFAB2D]">Important</p>
                </div>
                <img className="flex" src="3dot_vertical.svg"></img>
              </div>

              {/* card title */}
              <p className="text-md">
                Create sign up sheet for holiday student/parent
              </p>

              {/* card progress */}
              <div>
                <div className="flex flex-row ">
                  <div className="w-64 h-2 rounded-xl bg-[#1E1C3A]">
                    <div className="h-full rounded-xl bg-[#FFAB2D] w-1/4"></div>
                  </div>
                </div>
              </div>

              {/* profile & dues */}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row overflow-hidden">
                  <div className="relative w-8 h-8 rounded-full bg-white border-2 border-[#15132B]  "></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B] "></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B]"></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B]"></div>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                  <img className="w-4 h-4" src="clock_small.svg" alt="" />
                  <span className="text-xs">Due in 4 days</span> 
                </div>
              </div>
            </div>

            {/* 2nd card */}
            <div className="flex flex-col bg-[#07051A] w-72 h-[196px] p-3 gap-5 rounded-xl">
            
            </div>

            {/* 3rd card */}
            <div className="flex flex-col bg-[#211A75] p-3 gap-5 rounded-xl transform -translate-y-[180px] translate-x-8 rotate-6 shadow-[28px_-30px_35px_15px_#00000024] z-10">
              {/* card priority*/}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-3">
                  <img className="w-2 h-2" src="reddot.svg" alt="" />
                  <p className="text-md text-[#FF4A55]">BUGS FIXING</p>
                </div>
                <img className="flex" src="3dot_vertical.svg"></img>
              </div>

              {/* card title */}
              <p className="text-md">
                Pyment gateway needs reauthorization.
              </p>

              {/* card progress */}
              <div>
                <div className="flex flex-row ">
                  <div className="w-64 h-2 rounded-xl bg-[#1E1C3A]">
                    <div className="h-full rounded-xl bg-[#FF4A55] w-4/5"></div>
                  </div>
                </div>
              </div>

              {/* profile & dues */}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row overflow-hidden">
                  <div className="relative w-8 h-8 rounded-full bg-white border-2 border-[#15132B]  "></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B] "></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B]"></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B]"></div>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                  <img className="w-4 h-4" src="clock_small.svg" alt="" />
                  <span className="text-xs">Due in 4 days</span> 
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Done */} 
         <div className="flex flex-col w-72 gap-5">
          {/* Title */}
          <div className="flex flex-row items-center justify-between">
            <p className="font-xl">Done (3)</p>
            <img className="w-10 h-10" src="inactive_plus.svg" alt="" />
          </div>

          {/* list */}
          <div className="flex flex-col gap-4">
            {/* 1st card */}
            <div className="flex flex-col bg-[#211A75] p-3 gap-5 rounded-xl">
              {/* card priority*/}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-3">
                  <img className="w-4 h-4" src="reddot.svg" alt="" />
                  <p className="text-md text-[#FF4A55]">BUGS FIXING</p>
                </div>
                <img className="flex" src="3dot_vertical.svg"></img>
              </div>

              {/* card title */}
              <p className="text-md">
                Action button needed for Google Maps visits.
              </p>

              {/* card progress */}
              <div>
                <div className="flex flex-row ">
                  <div className="w-64 h-2 rounded-xl bg-[#1E1C3A]">
                    <div className="h-full rounded-xl bg-[#FF4A55] w-4/4"></div>
                  </div>
                </div>
              </div>

              {/* profile & dues */}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row overflow-hidden">
                  <div className="relative w-8 h-8 rounded-full bg-white border-2 border-[#15132B]  "></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B] "></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B]"></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B]"></div>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                  <img className="w-4 h-4" src="clock_small.svg" alt="" />
                  <span className="text-xs">Due in 4 days</span> 
                </div>
              </div>
            </div>

            {/* 2nd card */}
            <div className="flex flex-col bg-[#211A75] p-3 gap-5 rounded-xl">
              {/* card priority*/}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-3">
                  <img className="w-2 h-2" src="greendot.svg" alt="" />
                  <p className="text-md text-[#38E25D]">Database</p>
                </div>
                <img className="flex" src="3dot_vertical.svg"></img>
              </div>

              {/* card title */}
              <p className="text-md">
                Update new instructor photos.
              </p>

              {/* card progress */}
              <div>
                <div className="flex flex-row ">
                  <div className="w-64 h-2 rounded-xl bg-[#1E1C3A]">
                    <div className="h-full rounded-xl bg-[#38E25D] w-4/4"></div>
                  </div>
                </div>
              </div>

              {/* profile & dues */}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row overflow-hidden">
                  <div className="relative w-8 h-8 rounded-full bg-white border-2 border-[#15132B]  "></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B] "></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B]"></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B]"></div>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                  <img className="w-4 h-4" src="clock_small.svg" alt="" />
                  <span className="text-xs">Due in 4 days</span> 
                </div>
              </div>
            </div>

            {/* 3rd card */}
            <div className="flex flex-col bg-[#211A75] p-3 gap-5 rounded-xl">
              {/* card priority*/}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-3">
                  <img className="w-2 h-2" src="pinkdot.svg" alt="" />
                  <p className="text-md text-[#E328AF]">Instructor Meeting</p>
                </div>
                <img className="flex" src="3dot_vertical.svg"></img>
              </div>

              {/* card title */}
              <p className="text-md">
                Review/correct yellow belt techniques.
              </p>

              {/* card progress */}
              <div>
                <div className="flex flex-row ">
                  <div className="w-64 h-2 rounded-xl bg-[#1E1C3A]">
                    <div className="h-full rounded-xl bg-[#E328AF] w-5/5"></div>
                  </div>
                </div>
              </div>

              {/* profile & dues */}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row overflow-hidden">
                  <div className="relative w-8 h-8 rounded-full bg-white border-2 border-[#15132B]  "></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B] "></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B]"></div>
                  <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B]"></div>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                  <img className="w-4 h-4" src="clock_small.svg" alt="" />
                  <span className="text-xs">Due in 4 days</span> 
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revised */}
        <div className="flex flex-col w-72 gap-5">
          {/* Title */}
          <div className="flex flex-row items-center justify-between">
            <p className="font-xl">Revised (0)</p>
            <img className="w-10 h-10" src="inactive_plus.svg" alt="" />
          </div>

          {/* list */}
          <div className="flex flex-col gap-4">
            {/* Empty card */}
              <div className="flex justify-center items-center w-72 h-[100px] gap-5 rounded-xl bg-[#211A75] ">
                <div className="flex justify-center items-center px-8 py-4 rounded-xl border-dashed border-2 border-[#7879F1]  bg-[#15132B] text-[#7879F1]">Move card here</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KanbanBoard;
