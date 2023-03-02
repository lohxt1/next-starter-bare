import React, { ReactNode } from "react";
import { cn } from "@/utils/tailwind";
import HeaderIsland from "./headerIsland";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <div className={cn("h-screen")}>
      <HeaderIsland />
      {props.children}
    </div>
  </div>
);

export default Layout;
