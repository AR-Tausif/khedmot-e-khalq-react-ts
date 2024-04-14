import React from "react";
import { SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";

const DonorDetailsBox = ({ details }) => {
  return (
    <SheetHeader>
      <SheetTitle>{details.name}</SheetTitle>
      <SheetDescription>Comming Soon This Features...</SheetDescription>
      <div>hello</div>
    </SheetHeader>
  );
};

export default DonorDetailsBox;
