import React from "react";
type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <div className="max-w-xl py-4 mt-12 mb-auto ml-24">{children}</div>;
}

export default Layout;
