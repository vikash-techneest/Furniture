import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = () => {
  // Mobile sidebar open/close state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      
      {/* Sidebar - Mobile par slide hoga */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}

        <main className="flex-1 flex flex-col overflow-y-auto w-full hide-scrollbar">
        
        {/* Topbar - Hamburger click par Sidebar open karega */}
        <Topbar onMenuClick={() => setIsSidebarOpen(true)} />

        <div className="flex-1 p-4 md:p-8">
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default Layout;