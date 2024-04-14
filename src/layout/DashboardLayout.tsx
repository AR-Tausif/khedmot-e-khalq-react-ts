import AsideBar from "@/components/shared/AsideBar";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <AsideBar />
      <section className="lg:ml-12 md:ml-12">
        <Navbar />
        <main className="bg-[#e7e3ff] min-h-screen">
          <span className="text-[#ff790e] text-[#34a853] md:text-[#1bdb8a] sm:text-[#a5aa85]" />
          <div className="lg:px-20 lg:py-10 md:px-17 md:py-7 sm: p-6">
            <div className="flex justify-between items-center">
              <div>
                {/* <PathCrumb /> */}
                <h4 className="text-2xl mt-2 font-semibold">
                  <span className="text-[#ff790e] font-bold">
                    Khedmot-E-Khalk Bangladesh
                    <span />
                  </span>{" "}
                  Blood Donors.
                </h4>
              </div>
              <div className="space-x-3">
                <Button
                  className="border border-[#ff790e] text-[0.795rem]"
                  variant="ghost"
                >
                  <Mail className="mr-2 h-3.5 w-3.5" /> Login with Email
                </Button>
              </div>
            </div>
            <Separator className=" my-4 bg-slate-300" />
            <Outlet />
          </div>
        </main>
      </section>
    </>
  );
};

export default DashboardLayout;
