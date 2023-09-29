import React from 'react'

function KanbanTitle() {
  return (
   <div>
     {/* Title */}
     <div className="flex flex-row bg-[#15132B] px-2 py-4 rounded-xl">
        {/* Back Button */}
        <div className="lg:flex hidden items-top p-2 ">
          <img
            className="w-8 h-8 bg-white rounded-full"
            src="back_button.svg"
            alt=""
          />
        </div>

        {/* Title */}
        <div className="flex flex-col justify-between w-full ">
          {/* Title name */}
          <div className="flex flex-row items-center justify-between space-x-10 w-full">
            {/* name */}
            <div className="flex flex-col justify-start">
              <p>School November Tasks</p>
              <p className="text-xs py-2">
                Created by Instructor Day on November 31, 2022
              </p>
            </div>

            {/* location */}
            <div className="hidden lg:flex flex-row justify-end gap-2">
              <div className="flex flex-col">
                <p> Centered Martial Arts </p>
                <p className="text-xs py-2"> Sunnyvale, Ca</p>
              </div>
              <img
                className="w-8 h-8 items-center justify-center bg-white rounded-lg"
                src="company_logo.png"
                alt=""
              />
            </div>
          </div>


            {/* Other Details */}
          <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-5 mt-4">
              {/* fuctional buttons */}
          <div className="flex flex-row flex-wrap lg:flex-row lg:justify-between gap-5">
            {/* avtar group */}
            <div className="flex flex-row overflow-hidden">
              <div className="relative w-8 h-8 rounded-full bg-white border-2 border-[#15132B]  "></div>
              <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B] "></div>
              <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B]"></div>
              <div className="relative w-8 h-8 rounded-full bg-white -ml-2 border-2 border-[#15132B]"></div>
              <div className="relative w-8 h-8 rounded-full bg-[#E328AF] -ml-2 border-2 border-[#15132B] items-center justify-center text-center ">
                5+
              </div>
            </div>

            {/* Invite People */}
            <div className="flex flex-row items-center justify-center rounded-xl px-2 gap-2 bg-[#6418C3]">
              <img className="w-6 h-6" src="invite.svg" alt="" />
              <p className="text-sm">Invite People</p>
            </div>

            {/* Private button */}
            <div className="flex flex-row items-center justify-center rounded-xl px-3 gap-2 w-12 h-12 lg:w-auto lg:h-auto bg-transparent border border-[#7879F1]">
              <p className="text-sm">Private</p>
            </div>

            {/* Edit button */}
            <div className="flex flex-row items-center justify-center rounded-xl px-3 gap-2 w-12 h-12 lg:w-auto lg:h-auto  bg-[#7879F1]">
              <p className="text-sm">Edit</p>
            </div>

            {/* Comment */}
            <div className="flex flex-row items-center justify-center rounded-xl px-2 gap-2 w-auto h-12 lg:w-auto lg:h-auto bg-transparent border border-[#7879F1]">
              <img className="w-6 h-6" src="comment.svg" alt="" />
              <p className="text-sm">45 Comments</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="flex flex-col lg:flex-row ">
            <p className="text-sm flex flex-nowrap w-40">Total Progress 60%</p>
            <div className="w-56 h-4 rounded-xl bg-[#1E1C3A]">
              {/* Progress Div */}
              <div className="h-full rounded-xl bg-[#6418C3] w-3/5"></div>
            </div>
          </div>
          </div>

        
        </div>

        {/* 3dot menu */}
        <div className="flex items-top p-2">
          <img className="w-8 h-8 " src="3dot.svg" alt="" />
        </div>
      </div>
   </div>

  )
}

export default KanbanTitle