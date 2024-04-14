import { useState } from "react";
import AvatarPhoto from "@/components/shared/AvatarPhoto";
import DateCustomizingFromISOTime from "@/components/shared/DateCustomizingFromISOTime";
import DonorDetailsBox from "@/components/shared/DonorDetailsBox";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleChevronRight } from "lucide-react";

const DonorsTable = () => {
  const [donors, setDonors] = useState([]);
  return (
    <>
      <Table>
        <TableCaption>A list of your all blood donors.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Name & Phone</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-[#ff790e]">Blood Group</TableHead>
            <TableHead>Majlish</TableHead>
            <TableHead className="">Last Donate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {donors.map((donor, i) => (
            <Sheet key={i}>
              <TableRow className="text-sm">
                <TableCell>
                  <a className="inline-flex items-center">
                    <AvatarPhoto img={donor.img} text="TR" />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        {donor.name}
                      </span>
                      <span className="text-gray-400 text-xs tracking-wide mt-0.5">
                        {donor.number}
                      </span>
                    </span>
                  </a>
                </TableCell>
                <TableCell>
                  <span className="text-[0.87rem]">{donor.age}</span>
                </TableCell>
                <TableCell className="font-semibold text-[#ff790e]">
                  {donor.bloodGroup}
                </TableCell>
                <TableCell className="">{donor.majlish.name}</TableCell>

                <TableCell className="flex ">
                  <SheetTrigger className="rounded-full">
                    <Button>
                      <CircleChevronRight size={18} />
                    </Button>
                    <DateCustomizingFromISOTime date={donor.lastDate.date} />
                  </SheetTrigger>
                </TableCell>
              </TableRow>
              <SheetContent>
                <DonorDetailsBox details={donor} />
              </SheetContent>
            </Sheet>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default DonorsTable;
