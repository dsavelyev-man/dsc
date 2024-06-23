import React, { PropsWithChildren } from "react";
import Sidebar from "../ordinary/sidebar";
import AuthProvider from "../providers/Auth.provider";

const Default = (props: PropsWithChildren) => {
  return (
    <AuthProvider>
      <div className="grid grid-cols-[200px_1fr] h-screen">
        {/* he has fixed position and this break the layout */}
        <Sidebar />
        <div />
        <div className="p-2 pl-0">{props.children}</div>
      </div>
    </AuthProvider>
  );
};

export default Default;
