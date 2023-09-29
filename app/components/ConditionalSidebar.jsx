import React from "react";

function ConditionalSidebar() {
  return (
    <div className="flex flex-col bg-[#15132b] gap-4 overflow-y-auto flex-1 max-h-[600px]">
      {/* Conditional Search Bar */}
      <div className="flex items-center justify-start mt-2 rounded-3xl w-full h-10 bg-[#211A75] ">
        <img className="p-2 rounded-3xl w-10 h-10" src="search_icon.svg"></img>
        <input
          type="text"
          placeholder="Search Here"
          autoFocus
          className="pl-4 rounded-3xl text-sm bg-transparent text-black"
        />
      </div>

      {/* Condtional sidebar icons */}
      <div></div>
      <div className="relative flex flex-row space-x-4 justify-center items-center gap-2">
        <div>
          <img className="w-8 h-8" src="bell_icon.svg"></img>
          <div className="flex absolute top-0 ml-5 p-1 w-4 h-4  bg-[#5DCFFF] rounded-full text-[10px] justify-center items-center">
            12
          </div>
        </div>{" "}
        {/* Activity */}
        <div>
          <img className="w-8 h-8" src="frame_icon.svg"></img>
          <div className="flex absolute top-0 ml-5 p-1 w-4 h-4  bg-[#5DCFFF] rounded-full text-[10px] justify-center items-center">
            {" "}
            5
          </div>
        </div>{" "}
        {/* Notification */}
        <div>
          <img className="w-8 h-8" src="check_icon.svg"></img>
          <div className="flex absolute top-0 ml-5 p-1  w-4 h-4 bg-[#5DCFFF] rounded-full text-[10px] justify-center items-center">
            {" "}
            2
          </div>
        </div>{" "}
        {/* Check */}
        <div>
          <img className="w-8 h-8" src="calender_icon.svg"></img>
          <div className="flex absolute top-0 ml-5 p-1 w-4 h-4  bg-[#5DCFFF] rounded-full text-[10px] justify-center items-center">
            12
          </div>
        </div>{" "}
        {/* Folder */}
      </div>
      <div className=""></div>

      {/* sidebar main menu */}
      {/* Sidebar */}
      <div className="">
        <div className="flex flex-col items-center w-full bg-[#15132B] justify-center">
          <p className="text-white font-Cairo text-md antialiased font-regular pr-8 ">
            MAIN MENU
          </p>

          <div className="flex flex-col items-start justify-center px-8 py-6 w-full space-y-5">
            {/* Dashboard */}
            <div className="flex items-center space-x-12 ">
              <img className="w-6 h-6" src="./dashboard.svg" alt="" />
              <p className="font-cairo  px-2 ">Dashboard</p>
            </div>

            {/* Email */}
            <div className="flex flex-row items-center space-x-12 ">
              <img className="w-6 h-6" src="./email.svg" alt="" />
              <p className="font-cairo  px-2 ">Email</p>
              <div className="bg-[#5ECFFF] rounded-full w-6 h-6 flex items-center justify-center text-xs text-white">
                17
              </div>
              <img
                className="w-4 h-4 items-center justify-center "
                src="down_pointer.svg"
                alt=""
              />
            </div>

            {/* Chat */}
            <div className="flex items-center space-x-12">
              <img className="w-6 h-6" src="./chat.svg" alt="" />
              <p className="font-cairo  text-[#7879F1] px-2 ">Chat</p>
            </div>

            {/* Kanban */}
            <div className="flex items-center justify-between gap-4 relative">
              <div className="flex items-center space-x-12">
                <img className="w-6 h-6" src="./kanban.svg" alt="" />
                <p className="font-cairo px-2">Kanban</p>
              </div>
              <img className="w-4 h-4 ml-12" src="right_pointer.svg" alt="" />
              <div className="absolute -right-8 -top-0 bg-[#6418C3] w-1 h-6 "></div>
            </div>

            {/* Contact */}
            <div className="flex items-center space-x-12">
              <img className="w-6 h-6" src="./contact.svg" alt="" />
              <p className="font-cairo  text-[#7879F1] px-2 ">Contact</p>
              <div className="bg-[#E328AF] rounded-full text-xs p-1">NEW</div>
            </div>

            {/* Calender */}
            <div className="flex items-center space-x-12">
              <img className="w-6 h-6" src="./calender.svg" alt="" />
              <p className="font-cairo text-[#7879F1] px-2 ">Calender</p>
            </div>

            {/* Courses */}
            <div className="flex items-center justify-between gap-4 relative">
              <div className="flex items-center space-x-12">
                <img className="w-6 h-6" src="./courses.svg" alt="" />
                <p className="font-cairo text-[#7879F1] px-2 ">Courses</p>
              </div>
              <img className="w-4 h-4 ml-12" src="right_pointer.svg" alt="" />
            </div>

            {/* Shop */}
            <div className="flex items-center space-x-12">
              <img className="w-6 h-6" src="./shop.svg" alt="" />
              <p className="font-cairo text-[#7879F1] px-2 ">Shop</p>
            </div>

            {/* Invoices */}
            <div className="flex items-center justify-between gap-4 relative">
              <div className="flex items-center space-x-12">
                <img className="w-6 h-6" src="./invoice.svg" alt="" />
                <p className="font-cairo text-[#7879F1] px-2 ">Invoices</p>
              </div>
              <img className="w-4 h-4 ml-12" src="right_pointer.svg" alt="" />
            </div>
            {/* Settings */}
            <div className="flex items-center space-x-12">
              <img className="w-6 h-6" src="./settings.svg" alt="" />
              <p className="font-cairo text-[#7879F1] px-2 ">Settings</p>
            </div>
          </div>
        </div>

        {/* Mask Group */}
        <div className="flex flex-col items-center bg-[#15132B] justify-center  ">
          {/*-- Main Vector --*/}
          <div className="relative w-52 h-40 rounded-3xl overflow-hidden">
            {/* Content of the main vector */}
            <img src="rectangle.svg"></img>

            {/* Secondary Vector */}
            <div className="absolute -bottom-5 -right-10 w-36 h-36 rounded-full overflow-hidden bg-[#1CBBFF] z-10">
              {/* Content of the secondary vector */}
            </div>

            <div class="absolute top-5 left-5 z-20">
              <img src="vector_grip.svg"></img>
            </div>

            <div className="absolute z-20 top-16 left-5 text-white font-medium">
              Increase your <br />
              work with Kanban
            </div>

            <div className="absolute top-32 left-5 z-20">
              <img src="right_arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConditionalSidebar;
