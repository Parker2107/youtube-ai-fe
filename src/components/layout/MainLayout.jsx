import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex bg-[#030712] text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <div className="p-8">
          {children}
        </div>

      </div>
    </div>
  );
}