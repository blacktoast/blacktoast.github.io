import React from "react";

type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return <div className="border-solid border-2 border-red-200">{children}</div>;
}

export default Container;
