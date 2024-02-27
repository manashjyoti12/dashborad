import { Outlet } from "react-router-dom";
import HrSidebar from "../components/Hr/HrSidebar";

const HrDAshboard = () => {
  return (
    <div className="flex">
      <div className="w-[300px">
        <HrSidebar />
      </div>

      <div className="bg-slate-100 w-full p-4">
        <div>
          <h1 className="text-5xl m-6">Hr Dashboard</h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default HrDAshboard;
