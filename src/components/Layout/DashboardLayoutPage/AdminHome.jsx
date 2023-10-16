import {
  ArrowRightIcon,
  ExclamationCircleIcon,
  FaceFrownIcon,
  HomeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div className=" w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 px-12 gap-5 bg-blue-gray-50">
        <div className=" p-12">
          <h1 className="uppercase text-xl pb-2">Company</h1>
          <div className=" space-y-2 text-lg">
            <h1>About Us</h1>
            <h1>Information</h1>
            <h1>Legal Info</h1>
            <h1>Somethink</h1>
          </div>
        </div>
        <div className=" p-12">
          <h1 className="uppercase text-xl pb-2 ml-5">Links</h1>
          <div className=" space-y-2 flex flex-col text-lg">
            <div className="flex items-center gap-2">
              <ArrowRightIcon className="h-5 w-5 text-blue-600"  />
              <Link>Home</Link>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRightIcon className="h-5 w-5 text-blue-600" />
              <Link>About Us</Link>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRightIcon className="h-5 w-5 text-blue-600" />
              <Link>License</Link>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRightIcon className="h-5 w-5 text-blue-600" />
              <Link>Service</Link>
            </div>
          </div>
        </div>
        <div className=" p-12">
          <h1 className="uppercase text-xl pb-2">Contact Us</h1>
          <div className=" space-y-2">
            <div className="flex items-center gap-2">
              <HomeIcon className="h-6 w-6" />
              <h1 className="text-lg">Dhaka-Bangladesh</h1>
            </div>
            <div className="flex items-center gap-2">
              <FaceFrownIcon className="h-6 w-6" />
              <h1 className="text-lg">Dhaka-Bangladesh</h1>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-6 w-6" />
              <h1 className="text-lg">+8801278367377</h1>
            </div>
            <div className="flex items-center gap-2">
              <ExclamationCircleIcon className="h-6 w-6" />
              <h1 className="text-lg">+hqalimited123@gmail.com</h1>
            </div>
          </div>
        </div>
        <div className=" p-12">
          <h1 className="uppercase text-xl pb-2">Follow us</h1>
          <div className=" flex gap-3 pt-5">
            <img
              className=" h-8 w-18 rounded-full"
              src="https://cdn-icons-png.flaticon.com/128/145/145802.png"
              alt=""
            />
            <img
              className=" h-8 w-18 rounded-full"
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt=""
            />
            <img
              className=" h-8 w-18 rounded-full"
              src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png"
              alt=""
            />
            <img
              className=" h-8 w-18 rounded-full"
              src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
