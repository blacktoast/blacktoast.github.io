import React from "react";
import Nav from "./Nav";

type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return (
    <section className="flex flex-col flex-nowrap items-center">
      <Nav></Nav>
      <main className="border-solid border-2 border-red-200 max-w-3xl">
        {children}
      </main>
    </section>
  );
}

export default Container;
