import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex text-white min-h-screen bg-transparent relative">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-8 scroll-smooth">
          {children}
        </main>
      </div>
    </div>
  );
}