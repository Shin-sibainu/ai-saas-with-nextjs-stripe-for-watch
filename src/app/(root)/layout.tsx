import Sidebar from "@/components/shared/Sidebar";
import React from "react";

export const runtime = "edge";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white md:flex-row">
      {/* sidebar */}
      <Sidebar />

      <div className="py-8 lg:max-h-screen lg:py-10">
        <div className="max-w-5xl mx-auto px-5 w-full text-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
