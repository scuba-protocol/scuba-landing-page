import React from "react"
import { Outlet } from "react-router-dom";

import AppHeader from "@components/AppHeader";
import AppFooter from "@components/AppFooter";

const MainLayout: React.FC<React.PropsWithChildren> = () => {
  return (
    <div className="flex h-screen w-screen flex-wrap">
      <AppHeader />
      <div className="relative w-screen z-10 bg-primary" id="app-screen">
        <Outlet />
        <AppFooter />
      </div>
    </div>
  )
}

export default MainLayout
