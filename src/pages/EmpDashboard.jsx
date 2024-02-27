import { Outlet } from "react-router-dom";
import EmpSidebar from "../components/emp/EmpSidebar";

const EmpDashboard = () => {
  return (
    <div className="flex">
      <div className="w-[300px">
        <EmpSidebar />
      </div>

      <div className="bg-slate-100 w-full p-4">
        <div>
          <h1 className="text-5xl m-6">Emp Dashboard</h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default EmpDashboard;
