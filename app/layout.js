import KanbanBoard from "./components/KanbanBoard";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import { Cairo } from "next/font/google";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "Kanban Dashboard",
  description: "Assignment for Kodagu Now",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <div className="flex flex-row w-full">
          <div className="flex-col w-1/6 sticky hidden lg:flex">
            <Sidebar />
          </div>
          <div className="flex flex-col lg:w-full overflow-auto ">
            <NavBar />
            <KanbanBoard />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
