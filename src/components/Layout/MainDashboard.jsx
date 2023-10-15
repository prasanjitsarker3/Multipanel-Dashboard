import { Outlet } from "react-router-dom";
import DashboardSide from "../SideBar/DashboardSide";

const MainDashboard = () => {
  return (
    <div className=" flex">
      <div className="p-3 ">
        <DashboardSide />
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainDashboard;
