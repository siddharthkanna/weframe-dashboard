const Sidebar = () => {
  return (
    <div className="flex-col bg-[#15132B] h-screen hidden lg:flex top-0 sticky">
      {/* Top Header */}
      <div className="flex flex-row pl-8 py-7 items-center justify-between shadow-[20px_20px_20px_10px_#00000024]">
        <p className="text-white font-medium text-xl font-Cairo ">
          weframetech
        </p>
        <img className="pr-12" src="./hamburger.svg" alt="" />
      </div>

      {/* Sidebar */}
      <div className="flex flex-col items-center bg-[#15132B] justify-center">
        <p className="text-white font-Cairo text-md antialiased font-regular pr-36 ">
          MAIN MENU
        </p>

        <div className="flex flex-col items-start justify-center px-8 py-6 w-full space-y-5">
          {/* Dashboard */}
          <div className="flex items-center space-x-6 ">
            <img className="w-6 h-6" src="./dashboard.svg" alt="" />
            <p className="font-cairo  px-2 ">Dashboard</p>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-6">
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
          <div className="flex items-center space-x-6">
            <img className="w-6 h-6" src="./chat.svg" alt="" />
            <p className="font-cairo  text-[#7879F1] px-2 ">Chat</p>
          </div>

          {/* Kanban */}
          <div className="flex items-center justify-between gap-4 relative">
            <div className="flex items-center space-x-6">
              <img className="w-6 h-6" src="./kanban.svg" alt="" />
              <p className="font-cairo px-2">Kanban</p>
            </div>
            <img className="w-4 h-4 ml-12" src="right_pointer.svg" alt="" />
            <div className="absolute -right-8 -top-0 bg-[#6418C3] w-1 h-6 "></div>
          </div>

          {/* Contact */}
          <div className="flex items-center space-x-6">
            <img className="w-6 h-6" src="./contact.svg" alt="" />
            <p className="font-cairo  text-[#7879F1] px-2 ">Contact</p>
            <div className="bg-[#E328AF] rounded-full text-xs p-1">NEW</div>
          </div>

          {/* Calender */}
          <div className="flex items-center space-x-6">
            <img className="w-6 h-6" src="./calender.svg" alt="" />
            <p className="font-cairo text-[#7879F1] px-2 ">Calender</p>
          </div>

          {/* Courses */}
          <div className="flex items-center justify-between gap-4 relative">
            <div className="flex items-center space-x-6">
              <img className="w-6 h-6" src="./courses.svg" alt="" />
              <p className="font-cairo text-[#7879F1] px-2 ">Courses</p>
            </div>
            <img className="w-4 h-4 ml-12" src="right_pointer.svg" alt="" />
          </div>

          {/* Shop */}
          <div className="flex items-center space-x-6">
            <img className="w-6 h-6" src="./shop.svg" alt="" />
            <p className="font-cairo text-[#7879F1] px-2 ">Shop</p>
          </div>

          {/* Invoices */}
          <div className="flex items-center justify-between gap-4 relative">
            <div className="flex items-center space-x-6">
              <img className="w-6 h-6" src="./invoice.svg" alt="" />
              <p className="font-cairo text-[#7879F1] px-2 ">Invoices</p>
            </div>
            <img className="w-4 h-4 ml-12" src="right_pointer.svg" alt="" />
          </div>
          {/* Settings */}
          <div className="flex items-center space-x-6">
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
            work with kanban
          </div>

          <div className="absolute top-32 left-5 z-20">
            <img src="right_arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
