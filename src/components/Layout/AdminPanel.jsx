import { Outlet } from "react-router-dom"
import AdminSideBar from "../SideBar/AdminSideBar"

const AdminPanel = () => {
  return (
    <div className=" flex p-3">
       <div >
        <AdminSideBar/>
       </div>
      <Outlet></Outlet>
    </div>
  )
}

export default AdminPanel
