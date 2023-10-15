import { Outlet } from "react-router-dom";
import InstructorSideBar from "../SideBar/InstructorSideBar";

const Main = () => {
  return (
    <div className="flex gap-5 p-3">
      <div className="">
        <InstructorSideBar />
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
