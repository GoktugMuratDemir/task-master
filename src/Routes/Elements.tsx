import React from "react";
import { LayoutMain } from "../Layouts/Main";
import { Home } from "../Pages/Home";
import { DetailPage } from "../Pages/Detail";
import { NotFound404 } from "../Pages/NotFound404";

interface Elements {
  LayoutMain: React.FC;
  Home: React.FC;
  DetailPage: React.FC;
  NotFound404: React.FC;
}

const elements: Elements = {
  LayoutMain,
  Home,
  DetailPage,
  NotFound404,
};

export default elements;
