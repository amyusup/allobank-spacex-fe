import List from "@/containers/rocket/list";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "AlloBank - SpaceX | List Rocket",
  description: "AlloBank SpaceX project FE list page",
};

const PageListRocket = () => {
  return <List />;
};

export default PageListRocket;
